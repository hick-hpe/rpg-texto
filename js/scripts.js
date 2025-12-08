// referencias HTML
const divDescricao = document.querySelector('#descricao');
const divListEscolhas = document.querySelector('#list-escolhas');
const divSessaoDados = document.querySelector('#sessao-dados');
const btnRolarDados = document.querySelector('#rolar');
const divResultDados = document.querySelector('#dados');

// variavel da soma dos dados
let somaDosDados = 0;

// atualiza tela ao clicar nas opções
function escolhaUser(target) {
    atualizarTela(target);
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
});

// cria o botao
function criarBotao(objButton) {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-light opcao";
    btn.innerHTML = objButton.text;

    // agora funciona dentro de módulos
    btn.addEventListener("click", () => escolhaUser(objButton.target));

    return btn;
}

// montar a lista botoes
function atualizarBotoes(sessao) {
    divListEscolhas.innerHTML = '';

    sessao["choices"].forEach(button => {
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

    // atualizar descrição
    divDescricao.innerHTML = cena.text.replace(/\n/g, "<br/>");

    // atualizar botões de escolhas
    atualizarBotoes(cena);

    // flag para exbir ou não os dados
    exibirSessaoDados(cena["roll-dices"]);
}

// começar
atualizarTela("introducao");

