(() => {
  const refs = {
    mobMenuBtn: document.querySelector(".menu-btn"),
    icon: document.querySelector(".menu-btn"),
    menu: document.querySelector(".mob-menu-thumb"),
    body: document.querySelector("body"),
  };

  refs.mobMenuBtn.addEventListener("click", () => {
    const expanded =
      refs.mobMenuBtn.getAttribute("aria-expanded") === "true" || false;
    refs.mobMenuBtn.setAttribute("aria-expanded", !expanded);
  });
  refs.mobMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.icon.classList.toggle("is-open");
    refs.menu.classList.toggle("is-open");
    refs.body.classList.toggle("no-scroll");
  }
})();
