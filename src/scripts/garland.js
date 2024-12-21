function updateGarland() {
  var garland = document.getElementById("garland");
  var garlandModule = garland.querySelector(".garland-module");
  var garlandModulesCount = Math.ceil(window.innerWidth / 289);

  garland.innerHTML = "";

  for (var i = 0; i < garlandModulesCount; i++) {
    var clone = garlandModule.cloneNode(true);
    garland.appendChild(clone);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateGarland();
});

window.addEventListener("resize", updateGarland);
