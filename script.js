const burger = document.querySelector(".nav__burger");
const menu = document.querySelector(".nav__list");
const orderButtons = document.querySelectorAll(".item__order");
const popup = document.querySelector(".popup");
const popupTitle = document.querySelector(".popup__title");
const popupImg = document.querySelector(".popup__img");
const sizes = document.querySelectorAll(".item__size");
const sizeInput = document.querySelector("#size");
const colors = document.querySelectorAll(".item__color");
const colorInput = document.querySelector("#color");
const popupButton = document.querySelector(".popup__order");

burger.addEventListener("click", () => {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});

for (let size of sizes) {
  size.addEventListener("click", (e) => {
    e.preventDefault();
    for (let size of sizes) {
      size.classList.remove("item__size_active");
    }
    size.classList.add("item__size_active");
    sizeInput.value = e.target.innerText;
  });
}

for (let color of colors) {
  color.addEventListener("click", (e) => {
    e.preventDefault();
    for (let color of colors) {
      color.classList.remove("item__color_active");
    }
    color.classList.add("item__color_active");
    colorInput.value = e.target.innerText;
  });
}

for (let orderButton of orderButtons) {
  orderButton.addEventListener("click", (e) => {
    e.preventDefault();
    popup.style.display = "flex";
    popupTitle.innerText = e.target.parentElement.querySelector(
      ".item__name"
    ).innerText;
    popupImg.setAttribute(
      "src",
      e.target.parentElement.querySelector("img").getAttribute("src")
    );
  });
}

popup.addEventListener("click", (event) => {
  if (event.target === document.querySelector(".popup")) {
    popup.style.display = "none";
  }
});

popupButton.addEventListener("click", (event) => {
  popup.style.display = "none";
});
