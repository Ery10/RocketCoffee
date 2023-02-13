const menu = document.querySelector("#menu");
const headerMobile = document.querySelector(".header-mobile :nth-child(2)");
const navLinks = document.querySelector(".nav");
const main = document.querySelector("#main");
const circleBottom = document.querySelector(".circle-bottom");
const homeHeader = document.querySelector(".home-header");
const navItems = document.querySelectorAll("nav p");
const line = document.querySelectorAll(".line-header-mobile");
const headerWeb = document.querySelector(".home-header")
const button = document.querySelector("#btn")
const body = document.querySelector(".open")

menu.addEventListener("click", () => {
  const isOpen = document.body.classList.contains("open");
  document.body.classList.toggle("open", !isOpen);
  document.body.classList.toggle("close", isOpen);
  
  
  main.style.visibility = isOpen ? "hidden" : "";

  circleBottom.style.visibility = isOpen ? "hidden" : "";

  homeHeader.style.display = isOpen ? "flex" : "";
  homeHeader.style.background = isOpen ? "none" : "";
  homeHeader.style.justifyContent = isOpen ? "flex-start" : "";
  homeHeader.style.padding = isOpen ? "0 0 0 0" : "";

  headerMobile.src = isOpen
    ? "../assets/menu-buguer-close.svg"
    : "../assets/menu-buguer-open.svg";
  headerMobile.style.width = isOpen ? "30%" : "";
  headerMobile.style.height = isOpen ? "18px" : "";

  navLinks.style.display = isOpen ? "flex" : "";
  navLinks.style.flexDirection = isOpen ? "column" : "";
  navLinks.style.alignItems = isOpen ? "flex-start" : "center";

  headerWeb.style.animation = isOpen ? "none" : "";

  for (var i = 1; i < line.length; i++) {
    line[i].style.margin = isOpen ? "0 0 0 0px" : "";
  }

  for (var i = 0; i < navItems.length; i++) {
    navItems[i].style.fontWeight = isOpen ? "400" : "";
    navItems[i].style.fontSize = isOpen ? "18px" : "";
    navItems[i].style.color = isOpen ? "#A8A8B3" : "";
    navItems[i].style.padding = isOpen ? "18px 0 14px 0" : "";
  }

  const items = document.querySelectorAll(".container-sidebar");
  const sideBar = document.querySelectorAll(".sidebar-header-mobile");
  const ItemsNav = document.querySelectorAll("nav p");

  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
      sideBar[i].style.visibility = "visible";
      ItemsNav[i].style.color = "white"
    });
  }
});

