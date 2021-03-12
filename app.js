const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
let vh = window.innerHeight * 0.01;

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
})
sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
})

document.documentElement.style.setProperty('--vh', `${vh}px`);
