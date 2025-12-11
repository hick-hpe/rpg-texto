// referencias HTML
const divH1NomeCena = document.querySelector('#nome-cena');
const divDescricao = document.querySelector('#descricao');
const divListEscolhas = document.querySelector('#list-escolhas');
const divSessaoDados = document.querySelector('#sessao-dados');
const btnRolarDados = document.querySelector('#rolar');
const divResultDados = document.querySelector('#dados');
const divAtributosInfluenciadores = document.querySelector('#atributos-influenciadores');
const divAtributosJogador = document.querySelector('#atributos-jogador');
const divAlteracoesAtributosJogador = document.querySelector('#alteracoes-atributos-jogador');

// variaveis globais
let somaTotal = 0;
let MIN_SUCCESS_3_CHOICES = 10;
let MIN_partial_3_CHOICES = 6;
let MIN_SUCCESS_2_CHOICES = 7;
let cenaID = "introducao";
// let cenaID = "localizar-casa-garoto";
// let cenaID = "continuar-examinar-area-loja";
let localStorageData = localStorage.getItem("jogador");
if (!localStorageData) {
    window.location.href = 'atributos.html';
}
let jogador = JSON.parse(localStorageData);
let objCena;
let atributosAdicao;
let atributosDescontado;
let cenasVistas = new Set();
let statusDecisaoJogador = '';

// buscar cena pelo ID
function buscarCenaPeloID(cenaID) {
    return (
        dados_cenas_01_02[cenaID] ||
        dados_cenas_03[cenaID] ||
        dados_cenas_04_05[cenaID]
    );
}

// atualizar atributos do jogador na interface
function atualizarAtributosJogadorNaInterface() {
    divAtributosJogador.innerHTML = ''; // limpa antes

    const atributosFormatados = {
        "investigacao": "Investigação",
        "intelecto": "Intelecto",
        "percepcao": "Percepção",
        "confusao": "Confusão",
        "social": "Social",
    }

    for (let attr in jogador) {
        const valor = jogador[attr];
        const span = document.createElement('span');
        span.className = 'd-block fs-5 mb-1'; // cada atributo em linha separada
        span.innerText = `${atributosFormatados[attr]}: ${valor}`;
        divAtributosJogador.appendChild(span);
    }
}

// atualizar atributos para os dados
function atualizarAtributosAdicionaisEPunicao() {
    atributosAdicao = objCena["atributos-adicao-dados"] || [];
    atributosDescontado = objCena["atributos-descontado-dados"] || [];
}

// adicionar/diminuir atributos do jogador
function alterarAtributosJogador() {
    // aumentar??
    if (Object.hasOwn(objCena, "atributos-add")) {
        const atributosLess = objCena["atributos-add"];
        Object.keys(atributosLess).forEach(attr => {
            if (jogador[attr]) {
                jogador[attr] += atributosLess[attr];
                console.log('ATTR-ADD: ', attr);
            }
        });
    }

    // diminuir
    if (Object.hasOwn(objCena, "atributos-less")) {
        const atributosLess = objCena["atributos-less"];
        Object.keys(atributosLess).forEach(attr => {
            if (jogador[attr]) {
                jogador[attr] -= atributosLess[attr];
                console.log('ATTR-LESS: ', attr);
            }
        });
    }
}

// adicionar/diminuir atributos do jogador após rolar os dados
function alterarAtributosJogadorAposDados() {
    const objRollResults = objCena["roll-results"][statusDecisaoJogador]
    const atributosAdd = objRollResults["atributos-adicao-jogador"] || [];
    const atributosLess = objRollResults["atributos-descontado-jogador"] || [];
    let divContentAlteracoesSuccess = '';
    let divContentAlteracoesDanger = '';

    console.log("=== Alterando atributos do jogador ===");
    console.log("Cena atual:", cenaID || "(sem id)");

    console.log("Atributos atuais do jogador:", JSON.stringify(jogador, null, 2));
    console.log("=====================================");

    // adicionar
    if (atributosAdd.length > 0) {
        atributosAdd.forEach(obj => {
            const { attr, value } = obj;

            if (jogador[attr] == null) {
                console.warn(`Atributo "${attr}" não existe no jogador! (add)`);
                return;
            }

            const antes = jogador[attr];
            jogador[attr] += value;

            console.log(
                `[ADD] ${attr}: ${antes} + ${value} → ${jogador[attr]}`
            );

            divContentAlteracoesSuccess += `<strong>${attr} +${value}</strong>`;
        });

        divContentAlteracoesSuccess = `
            <div class="alert alert-success mt-3 text-center" role="alert">
                <div class="d-flex flex-column justify-content-center align-items-center gap-2 fs-5">
                    ${divContentAlteracoesSuccess}
                </div>
            </div>
        `;
    }

    // diminuir
    if (atributosLess.length > 0) {
        atributosLess.forEach(obj => {
            const { attr, value } = obj;

            if (jogador[attr] == null) {
                console.warn(`Atributo "${attr}" não existe no jogador! (less)`);
                return;
            }

            const antes = jogador[attr];
            jogador[attr] -= value;

            console.log(
                `[LESS] ${attr}: ${antes} - ${value} → ${jogador[attr]}`
            );

            divContentAlteracoesDanger += `<strong>${attr} -${value}</strong>`;
        });

        divContentAlteracoesDanger = `
            <div class="alert alert-danger mt-3 text-center" role="alert">
                <div class="d-flex flex-column justify-content-center align-items-center gap-2 fs-5">
                    ${divContentAlteracoesDanger}
                </div>
            </div>
        `;
    }

    divAlteracoesAtributosJogador.innerHTML = divContentAlteracoesSuccess + divContentAlteracoesDanger;

    console.log("Atributos finais do jogador:", JSON.stringify(jogador, null, 2));
    console.log("=====================================");

    statusDecisaoJogador = '';

    // atualizar interface
    atualizarAtributosJogadorNaInterface();
}

// validar formato da cena
function cenaEhValida(cena, cenaID) {
    let erros = [];

    if (!cena) {
        console.error(`Cena "${cenaID}" não existe!`);
        return false;
    }

    // title precisa existir e ser string
    if (typeof cena.title !== "string" || cena.title.trim() === "") {
        erros.push(`Campo "title" ausente ou inválido na cena "${cenaID}".`);
    }

    // text precisa existir e ser string
    if (typeof cena.text !== "string" || cena.text.trim() === "") {
        erros.push(`Campo "text" ausente ou inválido na cena "${cenaID}".`);
    }

    // choices precisa ser um array
    if (!Array.isArray(cena.choices)) {
        erros.push(`Campo "choices" deve ser uma lista na cena "${cenaID}".`);
    } else {
        cena.choices.forEach((choice, i) => {
            if (!choice.text || !choice.target) {
                erros.push(
                    `Choice #${i} da cena "${cenaID}" está incompleto (text ou target ausente).`
                );
            }
        });
    }

    // se roll-dices for true, verificar roll-results
    if (cena["roll-dices"] === true) {
        if (!cena["roll-results"]) {
            erros.push(`Cena "${cenaID}" usa dados mas não tem "roll-results".`);
        } else {
            // validar classificacao das escolhas
            const rr = cena["roll-results"];
            let lista;
            if (Object.keys(rr).length === 3) {
                lista = ["success", "partial", "fail"];
            } else {
                lista = ["success", "fail"];
            }
            lista.forEach(key => {
                if (!rr[key]) {
                    erros.push(
                        `Cena "${cenaID}" requer "roll-results.${key}" mas xestá faltando.`
                    );
                }
            });

            // verificar se cada roll-result.${key} tem:
            // { text, target, atributos-adicao-jogador, atributos-descontado-jogador }
            lista.forEach(key => {
                // se o rr[key] não existe, não adianta validar nada interno
                if (!rr[key]) return;

                const camposObrigatorios = ["text", "target", "atributos-adicao-jogador", "atributos-descontado-jogador"]
                camposObrigatorios.forEach(attr => {
                    // caso seja array, pode ser vazio -> não gerar erro
                    if (Array.isArray(rr[key][attr])) return;

                    // caso não exista
                    if (rr[key][attr] == null) {
                        erros.push(`Cenário de "${key}" requer "${attr}" mas está faltando.`);
                    }
                });
            });
        }

        // se tem e se são listas
        // - atributos-adicao-dados
        // - atributos-descontado-dados
        ["atributos-adicao-dados", "atributos-descontado-dados"].forEach(chave => {
            // verificar se existe a chave
            if (!cena.hasOwnProperty(chave)) {
                erros.push(`Cena "${cenaID}" usa dados mas não tem "${chave}".`);
                return;
            }

            // verificar se são listas
            if (!Array.isArray(cena[chave])) {
                erros.push(`Campo "${chave}" da cena "${cenaID}" não é uma lista!!!`);
            }
        });
    }

    // se houver erros, mostrar e bloquear
    if (erros.length > 0) {
        console.group(`⚠️ Erros na cena "${cenaID}"`);
        erros.forEach(err => console.error(err));
        console.groupEnd();
        return false;
    }

    return true;
}

// atualiza interface ao clicar nas opções
function escolhaJogador(target) {
    cenaID = target;
    atualizarInterface(target);
}

// classificar escolha
function classificarEscolhaJogador(valorDado, numEscolhas) {
    const MIN_SUCCESS = objCena["min-success"] || MIN_SUCCESS_3_CHOICES;

    if (numEscolhas == 3) {
        // escolha tripla
        if (valorDado >= MIN_SUCCESS)
            return "success";
        else if (valorDado >= MIN_partial_3_CHOICES)
            return "partial";
        return "fail";
    } else {
        // escolha dupla
        if (valorDado >= MIN_SUCCESS)
            return "success";
        return "fail";
    }
}

// rolagem de 2 dados (2d6)
function obterResultadoDados() {
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    const soma = d1 + d2
    return { d1, d2, soma };
}

// alterar valores dos dados
// function alterarValoresDosDados() {

// }

// evento de rolar os dados
function rolarOsDados() {
    const { d1, d2, soma } = obterResultadoDados();
    atualizarAtributosAdicionaisEPunicao();
    const numPontosAdicionais = atributosAdicao.reduce((acc, curr) => acc + (jogador[curr] || 0), 0);
    const numPontosPunicao = atributosDescontado.reduce((acc, curr) => acc + (jogador[curr] || 0), 0);
    somaTotal = (soma + numPontosAdicionais) - numPontosPunicao;
    divResultDados.innerText = `${d1} + ${d2} = ${somaTotal}`;
    btnRolarDados.disabled = true;

    // teste aprimorado
    console.group("%c🎲 Resultado dos Dados", "color: blue; font-weight: bold");
    console.log("%cDados rolados:", "color: purple", d1, "+", d2);
    console.log("%cSoma base:", "color: purple", soma);

    console.group("%cAtributos que influenciaram positivamente", "color: green; font-weight: bold");
    console.log(atributosAdicao);
    atributosAdicao.forEach(attr => {
        if (jogador[attr] > 0) {
            console.log(`%c${attr}: +${jogador[attr]}`, "color: green; font-weight: bold");
        }
    });
    console.groupEnd();

    console.group("%cAtributos que influenciaram negativamente", "color: red; font-weight: bold");
    console.log(atributosDescontado);
    atributosDescontado.forEach(attr => {
        if (jogador[attr] > 0) {
            console.log(`%c${attr}: -${jogador[attr]}`, "color: red; font-weight: bold");
        }
    });
    console.groupEnd();

    console.log("%cPontos adicionais:", "color: green", numPontosAdicionais);
    console.log("%cPontos de punição:", "color: red", numPontosPunicao);
    console.log("%cSoma total (com modificadores):", "color: blue; font-weight: bold", somaTotal);
    console.groupEnd();

    criarAvisoAtributosQueInfluenciaramResultado();
    acaoAposRolarOsDados();
}

btnRolarDados.addEventListener("click", () => {
    rolarOsDados();
});

// ação após rolar os dados
function acaoAposRolarOsDados() {
    // obtém a cena atual
    const cena = buscarCenaPeloID(cenaID);

    // obtem proximas cenas
    const resultados = cena["roll-results"];

    // obter numero de escolhas
    const numEscolhas = Object.keys(resultados).length;

    // pega a cena de acordo com o valor do dado
    const classificacaoDado = classificarEscolhaJogador(somaTotal, numEscolhas);
    statusDecisaoJogador = classificacaoDado;
    const objResultado = resultados[classificacaoDado];
    alterarAtributosJogadorAposDados();

    // excluir aviso
    document.querySelector('#aviso').remove();

    // criar botao para avancar de acordo com o resultado
    atualizarBotoes([objResultado]);

    console.log('classificacaoDado:', classificacaoDado);
    console.log('objResultado:', objResultado);
}

// criar gif loading
function criarGifLoading() {
    const wrapper = document.createElement("div");
    const gif = document.createElement('img');
    gif.src = '../img/loading.gif'
    gif.width = 30;
    wrapper.appendChild(gif);
    return wrapper;
}

// criar aviso esperando dado
function criarAvisoEsperandoJogarDados() {
    const wrapper = document.createElement("div");
    wrapper.id = "aviso";
    wrapper.style.marginTop = '20px';
    wrapper.style.display = 'flex';
    wrapper.style.gap = '5px';
    wrapper.style.alignItems = 'center';
    const child = document.createElement("div");
    const gif = criarGifLoading();

    child.textContent = "Esperando jogador rolar os dados";
    wrapper.appendChild(child);
    wrapper.appendChild(gif);
    return wrapper;
}

// criar aviso atributos que influenciaram o resultado
function criarAvisoAtributosQueInfluenciaramResultado() {
    divAtributosInfluenciadores.innerHTML = '';

    // Atributos que aumentam
    let divContentAdicao = '';
    atributosAdicao.forEach(attr => {
        if (jogador[attr] > 0) {
            divContentAdicao += `<span class="fs-4">+${jogador[attr]} ${attr}</span>`;
        }
    });
    if (divContentAdicao) {
        const divContentSuccessHTML = `
            <div class="alert alert-success mt-3 text-center" role="alert">
                <div class="d-flex flex-column justify-content-center align-items-center gap-2">
                    ${divContentAdicao}
                </div>
            </div>
        `;
        divAtributosInfluenciadores.innerHTML += divContentSuccessHTML;
    }

    // Atributos que diminuem
    let divContentPunicao = '';
    atributosDescontado.forEach(attr => {
        if (jogador[attr] > 0) {
            divContentPunicao += `<span class="fs-4">-${jogador[attr]} ${attr}</span>`;
        }
    });
    if (divContentPunicao) {
        const divContentDangerHTML = `
            <div class="alert alert-danger mt-3 text-center" role="alert">
                <div class="d-flex flex-column justify-content-center align-items-center gap-2">
                    ${divContentPunicao}
                </div>
            </div>
        `;
        divAtributosInfluenciadores.innerHTML += divContentDangerHTML;
    }
}

// verificar se pode criar botao
function podeCriarBotao(objButton) {
    // se a cena nao foi vista ainda pelo jogador, permitir
    return !cenasVistas.has(objButton.target);
}

// cria o botao
function criarBotao(objButton) {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-light opcao";
    btn.innerHTML = objButton.text;

    // agora funciona dentro de módulos
    btn.addEventListener("click", () => escolhaJogador(objButton.target));

    return btn;
}

// montar a lista botoes
function atualizarBotoes(listButtons) {
    divListEscolhas.innerHTML = '';

    listButtons.forEach(button => {
        if (podeCriarBotao(button))
            divListEscolhas.appendChild(criarBotao(button));
    });
}

// exibir ou não a sessao dados
function exibirSessaoDados(exibir) {
    divSessaoDados.style.display = exibir ? "block" : "none";
}

// atualizar botao dos dados
function atualizarBotaoDados() {
    divResultDados.textContent = '🎲 🎲';
    btnRolarDados.disabled = false;
}

// atualizar interface
function atualizarInterface(cenaID) {
    // excluir avisos dos atributos nos dados
    divAtributosInfluenciadores.innerHTML = '';
    divAlteracoesAtributosJogador.innerHTML = '';

    // atualiza a interface com novos valores
    atualizarAtributosJogadorNaInterface();

    // atualizar botao dos dados
    atualizarBotaoDados();

    // obtém a cena atual
    objCena = buscarCenaPeloID(cenaID);

    console.log('cenaID: ', cenaID);

    // validar cena
    if (!cenaEhValida(objCena, cenaID)) return;

    // atualizar título
    divH1NomeCena.textContent = objCena.title;

    // atualizar descrição
    divDescricao.innerHTML = objCena.text.replace(/\n/g, "<br/>");

    // verifica se usa dados
    const cenaUsaDados = objCena["roll-dices"];
    if (cenaUsaDados) {
        divDescricao.appendChild(criarAvisoEsperandoJogarDados());
    }

    // atualizar botões de escolhas
    atualizarBotoes(objCena["choices"]);

    // flag para exbir ou não os dados
    exibirSessaoDados(cenaUsaDados);

    // marcar cena como "vista"
    cenasVistas.add(cenaID);

    console.log('cenasVistas: ', cenasVistas);
}

// começar
atualizarInterface(cenaID);

