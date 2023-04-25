const modBtn = document.querySelectorAll(".modBtn");
const mod = document.querySelectorAll(".mod");

modBtn.forEach((e) => {
  onModClick(modBtn, mod, e);
});

const modClose = document.querySelectorAll(".modClose").forEach((e) => {
  e.addEventListener("click", function (x) {
    var modId = x.target.dataset.mod;
    document.querySelector("#" + modId).classList.remove("active");
  });
});

function onModClick(modBtns, mods, modItem) {
  modItem.addEventListener("click", function (e) {
    let currentModBtn = modItem;
    let modTabId = currentModBtn.getAttribute("data-tab");
    let currentMod = document.querySelector(modTabId);
    if (!currentModBtn.classList.contains("active")) {
      modBtns.forEach(function (modItem) {
        modItem.classList.remove("active");
      });
      mods.forEach(function (modItem) {
        modItem.classList.remove("active");
      });
      currentMod.classList.add("active");
    }
  });
}
