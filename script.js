let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    searchForm.classList.remove('active');
    navbar.classList.toggle('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector(".panel").onclick = () =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const mainImage = document.getElementById('main-img');
    const imageTitle = document.getElementById('image-title');
    const imageDescription = document.getElementById('image-description');
    const imageLink = document.getElementById('panel_botao');
    const maxWords = 200; // Número máximo de palavras permitidas na descrição

    const truncateText = (text, maxWords) => {
        const words = text.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return text;
    };

    // Inicializar a descrição com limite de palavras
    imageDescription.textContent = truncateText(imageDescription.textContent, maxWords);

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
            imageTitle.textContent = thumbnail.getAttribute('data-title');
            const description = thumbnail.getAttribute('data-description');
            imageDescription.textContent = truncateText(description, maxWords);
            imageLink.href = thumbnail.getAttribute('data-link');
        });
    });
});


const WEEK = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

function updateTime() {
    var now = new Date();

    document.getElementById("time").innerText =
            zeroPadding(now.getHours(), 2) + ":" +
            zeroPadding(now.getMinutes(), 2) + ":" +
            zeroPadding(now.getSeconds(), 2);

    document.getElementById("date").innerText =
            zeroPadding(now.getDate(), 2) + "/" +
            zeroPadding(now.getMonth() + 1, 2) + "/" +
            zeroPadding(now.getFullYear(), 2) + " " +
            WEEK[now.getDay()];
}

updateTime();
setInterval(updateTime, 1000);

function zeroPadding(num, digit) {
    return String(num).padStart(digit, '0');
}

// Texto AutoDigita + Saudação Start
document.addEventListener('DOMContentLoaded', () => {
    const typedTextSpan = document.getElementById('typed-text');
    const typingDelay = 100;
    const erasingDelay = 20;
    const newTextDelay = 2000; // Atraso entre o texto atual e o próximo
    let textArray = [];
    let textArrayIndex = 0;
    let charIndex = 0;

    function getCurrentGreeting() {
        const now = new Date();
        const hours = now.getHours();
        if (hours < 12) {
            return "Bom dia!";
        } else if (hours < 18) {
            return "Boa tarde!";
        } else {
            return "Boa noite!";
        }
    }

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    function startTypingEffect() {
        const greeting = getCurrentGreeting();
        textArray = [greeting, "Bem-vindo ao Your'Nime!",
        "Espero que você tenha um ótimo dia, e...", "Que aproveite os animes!"]; // Texto de saudação + Algum outro texto
        if (textArray.length) setTimeout(type, newTextDelay + 250);
    }

    startTypingEffect();
});



// Texto AutoDigita + Saudação End