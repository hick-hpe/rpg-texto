// referencias HTML
const tituloAtributo = document.querySelector('#tituloAtributo');
const descricaoAtributo = document.querySelector('#descricaoAtributo');
const modal = document.querySelector('#modal-descricao');

// limpar dados de jogador, caso tenha
localStorage.clear();

let nomeAtributoSelecionado = '';

let jogador = {
    investigacao: 1,
    intelecto: 1,
    percepcao: 1,
    confusao: 1,
    social: 1
};

let explicacoesAtributos = {
    investigacao: "Capacidade de encontrar pistas e analisar detalhes.",
    intelecto: "Raciocínio lógico e habilidade de conectar informações.",
    percepcao: "Atenção ao ambiente e sensibilidade a sinais sutis.",
    confusao: "Nível de desorientação; quanto maior, mais erros e falhas.",
    social: "Habilidade de conversar, convencer e interpretar pessoas."
}

const atributosFormatados = {
    "investigacao": "Investigação",
    "intelecto": "Intelecto",
    "percepcao": "Percepção",
    "confusao": "Confusão",
    "social": "Social",
}

let pontosDisponiveis = 5;

const listaAtributos = document.getElementById("lista-atributos");
const pontosRestantes = document.getElementById("pontos-restantes");
const btnJogarContainer = document.getElementById("btn-jogar-container");

function habilitarBotaoIniciarJogo() {
    btnJogarContainer.classList.remove("d-none");
}

function desabilitarBotaoIniciarJogo() {
    btnJogarContainer.classList.add("d-none");
}

function atualizarTela() {
    listaAtributos.innerHTML = "";

    for (let atributo in jogador) {
        const valor = jogador[atributo];
        const podeAlterar = atributo !== "confusao";

        const linha = document.createElement("div");
        linha.className = "attr-row";

        linha.innerHTML = `
            <span class="attr-name">
                <button 
                    type="button" 
                    class="btn btn-link p-0 m-0 attr-info-btn" 
                    data-bs-toggle="modal" 
                    data-bs-target="#modal-descricao"
                    data-attr="${atributo}"
                >
                    <i class="bi bi-info-circle text-primary"></i>
                </button>
                ${atributosFormatados[atributo]}
            </span>

            <button class="btn btn-sm btn-light" ${!podeAlterar ? "disabled" : ""} data-attr="${atributo}" data-op="minus">−</button>
            <span class="attr-value">${valor}</span>
            <button class="btn btn-sm btn-light" ${!podeAlterar ? "disabled" : ""} data-attr="${atributo}" data-op="plus">+</button>
        `;

        listaAtributos.appendChild(linha);
    }

    pontosRestantes.innerText = pontosDisponiveis;
}

// evento ao abrir o modal
modal.addEventListener('show.bs.modal', (e) => {
    const botao = e.relatedTarget; // botão que abriu o modal
    const atributo = botao.getAttribute("data-attr");

    tituloAtributo.innerText = atributosFormatados[atributo];
    descricaoAtributo.innerText = explicacoesAtributos[atributo];
});

// aumentar/diminuir valores dos atributos
document.addEventListener("click", (e) => {
    if (!e.target.dataset.op) return;

    const atributo = e.target.dataset.attr;
    const operacao = e.target.dataset.op;

    if (atributo === "confusao") return;

    if (operacao === "plus" && pontosDisponiveis > 0) {
        jogador[atributo]++;
        pontosDisponiveis--;
    }

    if (operacao === "minus" && jogador[atributo] > 1) {
        jogador[atributo]--;
        pontosDisponiveis++;
    }

    // Sempre que alterar qualquer atributo:
    desabilitarBotaoIniciarJogo();          // Bloqueia o botão "Jogar"
    localStorage.setItem("jogador", "");    // Limpa o jogador salvo

    atualizarTela();
});

atualizarTela();

document.getElementById("confirmar").addEventListener("click", () => {
    const alertBox = document.getElementById("alert");

    // Se ainda há pontos sobrando
    if (pontosDisponiveis > 0) {
        alertBox.innerHTML = `
            <div class="alert alert-warning fade show mt-3" role="alert">
                Você ainda tem <strong>${pontosDisponiveis}</strong> ponto(s) para distribuir!
            </div>
        `;
        desabilitarBotaoIniciarJogo();
        return;
    }

    // Salvar atributos
    localStorage.setItem("jogador", JSON.stringify(jogador));

    // Mensagem de sucesso
    alertBox.innerHTML = `
        <div class="alert alert-success fade show mt-3" role="alert">
            Atributos confirmados com sucesso!
        </div>
      `;

    habilitarBotaoIniciarJogo();
});
