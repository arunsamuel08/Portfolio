// ==================== TYPEWRITER EFFECT ==================================
const TypeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

// Type Method
TypeWriter.prototype.type = function () {
  // Current index of word
  const current = this.wordIndex % this.words.length;
  // Get full text of current word
  const fullTxt = this.words[current];

  // check if deleting
  if (this.isDeleting) {
    //Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  //Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  // Initial Type Speed
  let typeSpeed = 150;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  // If word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    // make pause at end
    typeSpeed = this.wait;
    // set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    // move to next word
    this.wordIndex++;
    // pause before start typing
    typeSpeed = 300;
  }
  setTimeout(() => this.type(), typeSpeed);
};

// Init on DOM load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  //Init typewriter
  new TypeWriter(txtElement, words, wait);
}

// ====================== To keep NAV Bar in place ====================================================

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// ==================== Mobile view hamburger open ======================

const toggle = document.querySelector(".toggler");
const menu = document.querySelector(".menu");
const navlinks = document.querySelector(".nav_links");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

navlinks.addEventListener("click", () => {
  menu.classList.remove("active");
});

// ========================================================================

const cbox = document.querySelector(".toggler");

navlinks.addEventListener("click", () => {
  cbox.checked = false;
});

// =========================================================================

const navbar_color1 = document.querySelector(".home_nav");

navbar_color1.addEventListener("click", () => {
  navbar_color1.classList.toggle("active2");
  navbar_color2.classList.remove("active2");
  navbar_color3.classList.remove("active2");
  navbar_color4.classList.remove("active2");
});

const navbar_color2 = document.querySelector(".projects_nav");

navbar_color2.addEventListener("click", () => {
  navbar_color2.classList.toggle("active2");
  navbar_color1.classList.remove("active2");
  navbar_color3.classList.remove("active2");
  navbar_color4.classList.remove("active2");
});

const navbar_color3 = document.querySelector(".about_nav");

navbar_color3.addEventListener("click", () => {
  navbar_color3.classList.toggle("active2");
  navbar_color2.classList.remove("active2");
  navbar_color1.classList.remove("active2");
  navbar_color4.classList.remove("active2");
});

const navbar_color4 = document.querySelector(".contact_nav");

navbar_color4.addEventListener("click", () => {
  navbar_color4.classList.toggle("active2");
  navbar_color2.classList.remove("active2");
  navbar_color3.classList.remove("active2");
  navbar_color1.classList.remove("active2");
});
