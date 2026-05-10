const supriseBtn = document.getElementById("supriseBtn");

surpriseBtn.addEventListener("click",() => {

    alert("Happy Mothers day mom\n\n" + 
        "Thankyou for your love,care and support.\n" +
        "You are the best mom in the world😊"
    );
});


// floating hearts

const heartsContainer = document.querySelector(".hearts");
function createHeart() {
    const heart = document.createElement("span");
    const emojis =  ["💖", "🌸", "💕", "💗", "✨"];
    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = Math.random() * 20 + 20 + "px";

    heart.style.animationDuration = Math.random() * 5 + 5 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 500);


// ===============================
// SMOOTH FADE-IN EFFECT
// ===============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach((section) => {

        const sectionTop = section.getBoundingClientRect().top;

        const triggerPoint = window.innerHeight - 100;

        if (sectionTop < triggerPoint) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

});


// ===============================
// INITIAL SECTION STYLES
// ===============================

sections.forEach((section) => {

    section.style.opacity = "0";

    section.style.transform = "translateY(50px)";

    section.style.transition = "all 1s ease";

});




}


// ===============================
// HERO TEXT TYPING EFFECT
// ===============================

const heading = document.querySelector(".hero-content h1");

const text = "Happy Mother's Day Mom 💖";

let index = 0;

heading.innerHTML = "";

function typeText() {

    if (index < text.length) {

        heading.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 100);

    }

}

typeText();


// ===============================
// GALLERY IMAGE ZOOM EFFECT
// ===============================

const images = document.querySelectorAll(".card img");

images.forEach((image) => {

    image.addEventListener("mouseover", () => {

        image.style.transform = "scale(1.08)";

    });

    image.addEventListener("mouseout", () => {

        image.style.transform = "scale(1)";

    });

});


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log("Mother's Day Website Loaded Successfully 💖");
