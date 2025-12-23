
const reveals = document.querySelectorAll("#Skills");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
const reveals2 = document.querySelectorAll("#About_me");

window.addEventListener("scroll", () => {
  reveals2.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

const reveals3 = document.querySelectorAll("#My_projects");

window.addEventListener("scroll", () => {
  reveals3.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

if (window.matchMedia("(hover: hover)").matches) {
  document.addEventListener("mousemove", mouseMoveEffect);
}

function mouseMoveEffect(e) {
  const x = (e.clientX / window.innerWidth - 0.5) * 40;
  const y = (e.clientY / window.innerHeight - 0.5) * 40;
  hero.style.transform = `translate(${x}px, ${y}px)`;
}

if (window.innerWidth > 768) {
  document.addEventListener("mousemove", mouseMoveEffect);
} else {
  document.removeEventListener("mousemove", mouseMoveEffect);
  hero.style.transform = "translate(0, 0)";
}









