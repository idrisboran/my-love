const messages = [
    "Emin misin?",
    "Gerçekten emin misin?",
    "Aşkım barisabilir miyiz artik?",
    "Yavrum lütfen...",
    " Tekrar düsünmelisin",
    " Daha fazla hayir dersen kahrolucam",
    " Hayatim yetmez mi artik barisalim",
    "Barismak istiyorum artik",
    " Peki o zaman daha fazla sormayacağim..",
    " Bana baska care birakmadin ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}