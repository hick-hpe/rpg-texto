// referencias HTML
const divH1NomeCena = document.querySelector('#nome-cena');
const divDescricao = document.querySelector('#descricao');
const divListEscolhas = document.querySelector('#list-escolhas');
const divSessaoDados = document.querySelector('#sessao-dados');
const btnRolarDados = document.querySelector('#rolar');
const divResultDados = document.querySelector('#dados');
const divAtributosInfluenciadores = document.querySelector('#atributos-influenciadores');
const divAtributosJogador = document.querySelector('#atributos-jogador');

// variaveis globais
let somaTotal = 0;
let MIN_SUCCESS = 9;
let MIN_MIXED = 6;
let cenaAtual = "introducao";
// let cenaAtual = "examinar-portao";
let localStorageData = localStorage.getItem("jogador");
if (!localStorageData) {
    window.location.href = 'atributos.html';
}
let jogador = JSON.parse(localStorageData)
let objCenaAtual;
let atributosAdicao;
let atributosPunicao;

function atualizarAtributosJogador() {
    divAtributosJogador.innerHTML = ''; // limpa antes

    for (let attr in jogador) {
        const valor = jogador[attr];
        const span = document.createElement('span');
        span.className = 'd-block fs-5 mb-1'; // cada atributo em linha separada
        span.innerText = `${attr}: ${valor}`;
        divAtributosJogador.appendChild(span);
    }
}

// atualizar atributos para os dados
function atualizarAtributosAdicionaisEPunicao() {
    atributosAdicao = objCenaAtual["atributos-adicao"] || [];
    atributosPunicao = objCenaAtual["atributos-punicao"] || [];
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
            const rr = cena["roll-results"];
            ["success", "mixed", "fail"].forEach(key => {
                if (!rr[key]) {
                    erros.push(
                        `Cena "${cenaID}" requer "roll-results.${key}" mas está faltando.`
                    );
                }
            });
        }

        // se tem "atributos-adicao" e "atributos-punicao" e são listas
        ["atributos-adicao", "atributos-punicao"].forEach(chave => {
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

// atualiza tela ao clicar nas opções
function escolhaJogador(target) {
    cenaAtual = target;
    atualizarTela(target);
}

// classificar escolha
function classificarEscolhaJogador(valorDado) {
    if (valorDado >= MIN_SUCCESS)
        return "success";
    else if (valorDado >= MIN_MIXED)
        return "mixed";
    return "fail";
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
    const numPontosPunicao = atributosPunicao.reduce((acc, curr) => acc + (jogador[curr] || 0), 0);
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
    console.log(atributosPunicao);
    atributosPunicao.forEach(attr => {
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
    const cena = dados[cenaAtual];

    // obtem proximas cenas
    const resultados = cena["roll-results"];

    // pega a cena de acordo com o valor do dado
    const classificacaoDado = classificarEscolhaJogador(somaTotal);
    const objResultado = resultados[classificacaoDado];

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
    gif.src = 'img/loading.gif'
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
    atributosPunicao.forEach(attr => {
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
        divListEscolhas.appendChild(criarBotao(button));
    })
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

// atualizar tela
function atualizarTela(cenaID) {
    // excluir avisos dos atributos nos dados
    divAtributosInfluenciadores.innerHTML = '';

    // atualiza a tela com novos valores
    atualizarAtributosJogador();

    // atualizar botao dos dados
    atualizarBotaoDados();

    // obtém a cena atual
    objCenaAtual = dados[cenaID];

    console.log('cenaID: ', cenaID);

    // validar cena
    if (!cenaEhValida(objCenaAtual, cenaID)) return;

    // atualizar título
    divH1NomeCena.textContent = objCenaAtual.title;

    // atualizar descrição
    divDescricao.innerHTML = objCenaAtual.text.replace(/\n/g, "<br/>");

    // verifica se usa dados
    const cenaUsaDados = objCenaAtual["roll-dices"];
    if (cenaUsaDados) {
        divDescricao.appendChild(criarAvisoEsperandoJogarDados());
    }

    // atualizar botões de escolhas
    atualizarBotoes(objCenaAtual["choices"]);

    // flag para exbir ou não os dados
    exibirSessaoDados(cenaUsaDados);
}

// começar
atualizarTela(cenaAtual);

