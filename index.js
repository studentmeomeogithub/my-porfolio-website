// Dark Mode Toggle
let btn = document.querySelector(".darkmode");

btn.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
    if (document.body.classList.contains("darkmode")) {
        btn.innerHTML = `<i class="fas fa-sun"></i>`;
        btn.style.color = "orange";
        btn.style.backgroundColor = "rgb(43, 43, 43)";
    } else {
        btn.innerHTML = `<i class="fas fa-moon"></i>`;
        btn.style.color = "black";
        btn.style.backgroundColor = "white";
    }
});

// Typing Effect (optional, if you want to add to the header)
const typingText = document.querySelector(".header__text");
const text = typingText.innerText;
typingText.innerText = "";
let index = 0;

function type() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 10);
    }
}

type();
