const allDetailElements = document.querySelectorAll(`details`);
const [openIcon, closeIcon] = [
  "./assets/images/icon-plus.svg",
  "./assets/images/icon-minus.svg",
];
allDetailElements.forEach((element, index) => {
  element.addEventListener("toggle", (event) => {
    const isOpen = event.newState === "open";
    const imgElement = element.getElementsByTagName("img");
    imgElement.item(0).src = isOpen ? closeIcon : openIcon;
  });
});
