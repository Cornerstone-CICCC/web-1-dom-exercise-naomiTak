// YOUR CODE HERE
const btn1 = document.querySelector("#btn1")
const txt1 = document.querySelector("#output1")

btn1.addEventListener("click", () => {
    txt1.style.color = "red";
})

const btn2 = document.querySelector("#btn2")
const txt2 = document.querySelector("#output2")
const span = document.createElement("span");
span.textContent = "Hello word"

btn2.addEventListener("click", () => {
    txt2.appendChild(span);
})

const btn3 = document.querySelector("#btn3")
const txt3 = document.querySelector(".small-text")

btn3.addEventListener("click", () => {
    txt3.classList.remove("small-text");
})

const btn4 = document.querySelector("#btn4")
const txt4 = document.querySelectorAll("#output4")

console.log(txt4[0].childNodes);
btn4.addEventListener("click", () => {
    txt4[0].firstElementChild.style.color = "red";
    txt4[0].lastElementChild.style.color = "red";
})

const btn5 = document.querySelector("#btn5")
const txt5 = document.querySelector("#message")

btn5.addEventListener("click", () => {
    console.log(txt5.value)
})