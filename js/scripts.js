// referencias HTML
const divDescricao = document.querySelector('#descricao');
const divListEscolhas = document.querySelector('#list-escolhas');
const divSessaoDados = document.querySelector('#sessao-dados');
const btnRolarDados = document.querySelector('#rolar');
const divResultDados = document.querySelector('#dados');

// variavel da soma dos dados
let somaDosDados = 0;
let MIN_SUCCESS = 9;
let MIN_MIXED = 6;
let cenaAtual = "introducao";

// validar formato da cena
function cenaEhValida(cena, cenaID) {
    let erros = [];

    if (!cena) {
        console.error(`Cena "${cenaID}" não existe!`);
        return false;
    }

    // text precisa existir e ser string
    if (typeof cena.text !== "string") {
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

// classificar decisao
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

    return { d1, d2, soma: d1 + d2 };
}

// evento de rolar os dados
btnRolarDados.addEventListener("click", () => {
    const { d1, d2, soma } = obterResultadoDados();
    somaDosDados = soma;
    divResultDados.innerText = `${d1} + ${d2} = ${soma}`;
    acaoAposRolarOsDados();
});

// ação após rolar os dados
function acaoAposRolarOsDados() {
    // obtém a cena atual
    const cena = dados[cenaAtual];

    // obtem proximas cenas
    const resultados = cena["roll-results"];

    // pega a cena de acordo com o valor do dado
    const classificacaoDado = classificarEscolhaJogador(somaDosDados);
    const objResultado = resultados[classificacaoDado];

    // excluir aviso
    document.querySelector('#aviso').remove();

    // criar botao para avancar de acordo com o resultado
    atualizarBotoes([objResultado]);
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
    exibir ?
        divSessaoDados.style.display = "inline" :
        divSessaoDados.style.display = "none";
}

// atualizar tela
function atualizarTela(cenaID) {
    // obtém a cena atual
    const cena = dados[cenaID];

    // validar cena
    if (!cenaEhValida(cena, cenaID)) return;

    // atualizar descrição
    divDescricao.innerHTML = cena.text.replace(/\n/g, "<br/>");

    // verifica se usa dados
    const cenaUsaDados = cena["roll-dices"];
    if (cenaUsaDados) {
        divDescricao.appendChild(criarAvisoEsperandoJogarDados());
    }

    // atualizar botões de escolhas
    atualizarBotoes(cena["choices"]);

    // flag para exbir ou não os dados
    exibirSessaoDados(cenaUsaDados);
}

// começar
atualizarTela(cenaAtual);

