// INICIALIZAR EMAILJS
emailjs.init("Hfz6VGmTyhvlAt451"); // coloque sua public key

// IDs do EmailJS
const SERVICE_ID = "service_iddox08";
const TEMPLATE_ENVIADO_ID = "template_m1lp306";
const TEMPLATE_RECEBEU_ID = "template_z2skxfv";

const form = document.getElementById("feedbackForm");

function showModal(title, message) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalBody").innerText = message;

    const modal = new bootstrap.Modal(document.getElementById("modalMsg"));
    modal.show();
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // enviando para o jogador
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ENVIADO_ID, form)
        .then(() => {
            showModal("Enviado!", "🎉 Seu feedback foi enviado para o seu email!");
            form.reset();
        })
        .catch((err) => {
            console.error("Erro:", err);
            showModal("Erro!", "❌ Ocorreu um erro ao enviar para o jogador. Tente novamente.");
        });

    // enviando para você
    emailjs.sendForm(SERVICE_ID, TEMPLATE_RECEBEU_ID, form)
        .then(() => {
            console.log("Feedback enviado para você também!");
        })
        .catch((err) => {
            console.error("Erro:", err);
            showModal("Erro!", "❌ Não consegui te enviar a cópia do feedback.");
        });
});


