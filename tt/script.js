// Função para exibir a mensagem lentamente com animação
function showMessage() {
    const messageContainer = document.getElementById("message-container");
    messageContainer.classList.remove("d-none");

    const messageElement = document.getElementById("message");
    const message = "Estou muito feliz em comemorar mais um aniversário seu ao seu lado. " +
                    "Você é a pessoa mais especial em minha vida e desejo que este dia seja repleto de alegria, " +
                    "amor e realizações. Parabéns, meu amor! Te amo muito!";
    let index = 0;
    const speed = 50; // Velocidade da exibição da mensagem (em milissegundos)

    function typeMessage() {
        if (index < message.length) {
            messageElement.innerHTML += message.charAt(index);
            index++;
            setTimeout(typeMessage, speed);
        }
    }

    typeMessage();
}

// Adicionar animação de pulso no título
const title = document.querySelector(".display-4");
title.addEventListener("mouseover", () => {
    title.style.animation = "pulse 1s infinite";
});
title.addEventListener("mouseout", () => {
    title.style.animation = "none";
});

// Chamar a função de exibir a mensagem quando a página estiver carregada
window.onload = showMessage;
