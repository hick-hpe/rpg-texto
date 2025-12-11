// INICIALIZAR EMAILJS
emailjs.init(""); // coloque sua public key

// IDs do EmailJS
const SERVICE_ID = "";
const TEMPLATE_ENVIADO_ID = "";
const TEMPLATE_RECEBEU_ID = "";

const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // enviando para o jogador
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ENVIADO_ID, form)
        .then(() => {
            alert("🎉 Feedback enviado com sucesso! Obrigado!");
            form.reset();
        })
        .catch((err) => {
            console.error("Erro:", err);
            alert("❌ Ocorreu um erro ao enviar. Tente novamente.");
        });
    
    // enviando para mim
    emailjs.sendForm(SERVICE_ID, TEMPLATE_RECEBEU_ID, form)
        .then(() => {
            alert("🎉 Feedback recebido com sucesso!");
            form.reset();
        })
        .catch((err) => {
            console.error("Erro:", err);
            alert("❌ Ocorreu um erro ao enviar. Tente novamente.");
        });
});

