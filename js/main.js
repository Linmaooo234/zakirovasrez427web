'use strict';

//выпадающее меню
let menuElements = document.querySelectorAll('.menuelement') //получение элементов

menuElements.forEach(menuElements=>{
    let submenu = menuElements.querySelector('.submenu'); //получение элементов
    let btn = menuElements.querySelector('.menubutton');

    menuElements.addEventListener('mouseenter',function(){ //функция для наведения на пункт в меню
        submenu.classList.add('active');
        btn.classList.add('active');
    })
    menuElements.addEventListener('mouseleave',function(){ //функция когда мышка отводится от пункта в меню
        submenu.classList.remove('active');
        btn.classList.remove('active');
    })
})

//слайдер
let currentIndex = 0; //стартовый нулевой индекс

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.childElementCount; //полчение элементов и количество слайдов
  
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index; //осуществление функионала слайлдера
    }
  
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`; //переход между слайдами
}

function changeSlide(direction) {
    showSlide(currentIndex + direction); //функция листания слайдера
}

showSlide(currentIndex);

//выпадающаяя гармошка

document.querySelector('.faq').addEventListener('click', function(event){
    let target = event.target.closest('.faq__item'); //получение элементов
    if(!target) return;

    target.classList.toggle('active');
    let p = target.querySelector('p');

    if(target.classList.contains('active')){
        p.style.height = p.scrollHeight + 'px';
    }else{
        p.style.height = ''; //активация элементов при нажатии на элемент
    }
})

// модальное окно
const modal = document.getElementById("phoneModal");
const span = document.getElementsByClassName("close")[0]; //получение элементов

function showModal() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none"; //отображение элементов
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            showModal();
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5 
});

const target = document.getElementById('zagolovv'); //id элемента на котором модалка откротется
observer.observe(target);

