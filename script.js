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

document.querySelector(".list").onclick = () =>{ 
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector(".thumbnail").onclick = () =>{ 
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

//Slider
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

//Config param
let countItem = items.length;
let itemActive = 0;

//event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem -1;
    }
    showSlider();
}

//auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)

function showSlider(){
    //Remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    //Active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
}

//click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

// Limite de caracteres Slider Stard
document.addEventListener('DOMContentLoaded', function() {
    const maxLengthH2 = 20; // Limite de caracteres para h2
    const maxLengthP = 500; // Limite de caracteres para p

    function truncateText(selector, maxLength) {
        const elements = document.querySelectorAll(selector);
        console.log(`Truncating text for selector: ${selector}`);
        elements.forEach(element => {
            console.log(`Original text: ${element.textContent}`);
            if (element.textContent.length > maxLength) {
                element.textContent = element.textContent.slice(0, maxLength) + '...';
                console.log(`Truncated text: ${element.textContent}`);
            }
        });
    }

    truncateText('.anime-name', maxLengthH2);
    truncateText('.anime-description', maxLengthP)
});
// Limite de caracteres Slider End]

//Data e Hora Start
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

//Data e Hora End
