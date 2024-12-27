function updateChristmasGarland() {
  var christmasgarland = document.getElementById("christmasgarland");
  var christmasgarlandModule = christmasgarland.querySelector(
    ".christmasgarland-module"
  );
  var christmasgarlandModulesCount = Math.ceil(window.innerWidth / 289);

  christmasgarland.innerHTML = "";

  for (var i = 0; i < christmasgarlandModulesCount; i++) {
    var clone = christmasgarlandModule.cloneNode(true);
    christmasgarland.appendChild(clone);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateChristmasGarland();
});

window.addEventListener("resize", updateChristmasGarland);
