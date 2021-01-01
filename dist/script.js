// Variables
const body = document.querySelector("body");
const ulNavBar = document.querySelector(".ulNavBar");
const homeListLinks = document.querySelector(".homeListLinks");
const navLinks = document.querySelectorAll(".link");
const pages = document.querySelectorAll(".page");

// Events
ulNavBar.addEventListener("click", choosePage);
homeListLinks.addEventListener("click", choosePage);

// Window events to know when the screen is big enough for ul
window.addEventListener("load", checkWidth);
window.onresize = function windowResized() {
  checkWidth();
};

function checkWidth() {
  if (window.innerWidth > 1100) {
    document.querySelector(".toggler").checked = true;
  } else {
    check();
  }
}

function check() {
  document.querySelector(".toggler").checked = false;
}

function choosePage(e) {
  const eventTargetParent = e.target.parentElement;
  if (eventTargetParent.classList.contains("link")) {
    // Checkbox checks to hide it
    checkWidth();
    pages.forEach((page) => {
      // Setting each page to dispaly none
      page.style.display = "none";
      if (page.classList.contains(eventTargetParent.classList[0])) {
        // Removes display none from the page that was chosen
        page.removeAttribute("style");
      }
    });
  }
  // Stops from sending # to URL
  e.preventDefault();
}
