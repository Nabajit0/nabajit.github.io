// =======================
// Typing Animation
// =======================

const texts = [
  "Electrical Engineering Student",
  "IoT Enthusiast",
  "Future Engineer",
  "Automation Learner",
  "Technology Explorer"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

  const currentText = texts[textIndex];

  if (!deleting) {

    typingElement.textContent =
      currentText.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentText.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }

  } else {

    typingElement.textContent =
      currentText.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      textIndex++;

      if (textIndex >= texts.length) {
        textIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, deleting ? 40 : 90);
}

typeEffect();


// =======================
// Cursor Glow Effect
// =======================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

  glow.style.left =
    e.clientX - 125 + "px";

  glow.style.top =
    e.clientY - 125 + "px";

});


// =======================
// Scroll Reveal Animation
// =======================

const revealElements = document.querySelectorAll(
  ".glass-card,.project-card,.skill-card,.timeline-item,.certificate-card,.stat-card"
);

function revealOnScroll() {

  revealElements.forEach((element) => {

    const top =
      element.getBoundingClientRect().top;

    const windowHeight =
      window.innerHeight;

    if (top < windowHeight - 80) {

      element.style.opacity = "1";

      element.style.transform =
        "translateY(0px)";
    }

  });

}

revealElements.forEach((element) => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(40px)";

  element.style.transition =
    "all 0.8s ease";

});

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();


// =======================
// Back To Top Button
// =======================

const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#7c3aed";
topBtn.style.color = "white";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";

window.addEventListener("scroll", () => {

  if (window.scrollY > 400) {

    topBtn.style.display = "block";

  } else {

    topBtn.style.display = "none";

  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// =======================
// EmailJS Setup
// =======================

emailjs.init(
  "Rh3twnvJSF78sW-uT"
);


// =======================
// Contact Form
// =======================

const form =
document.getElementById("contactForm");

form.addEventListener(
  "submit",
  function(event) {

    event.preventDefault();

    const submitButton =
      form.querySelector("button");

    submitButton.innerHTML =
      "Sending...";

    emailjs.send(
      "service_362bfn5",
      "template_hbog6ud",
      {

        name:
          document.getElementById("name").value,

        email:
          document.getElementById("email").value,

        message:
          document.getElementById("message").value

      }

    )

    .then(() => {

      submitButton.innerHTML =
        "Message Sent ✓";

      alert(
        "Message sent successfully!"
      );

      form.reset();

      setTimeout(() => {

        submitButton.innerHTML =
          "Send Message";

      }, 3000);

    })

    .catch((error) => {

      console.error(error);

      submitButton.innerHTML =
        "Send Message";

      alert(
        "Failed to send message."
      );

    });

  }
);


// =======================
// Navbar Shadow
// =======================

window.addEventListener("scroll", () => {

  const navbar =
    document.querySelector(".navbar");

  if (window.scrollY > 30) {

    navbar.style.boxShadow =
      "0 10px 30px rgba(0,0,0,.3)";

  } else {

    navbar.style.boxShadow =
      "none";

  }

});
