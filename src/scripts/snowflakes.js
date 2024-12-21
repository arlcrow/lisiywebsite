document.addEventListener("DOMContentLoaded", () => {
  if (window.Snowflakes) {
    new Snowflakes({
      color: "#ffffff",
      count: 62,
      maxOpacity: 0.85,
      maxSize: 20,
      zIndex: 10,
    });
  } else {
    console.error("ERROR: Snowflakes is not defined. Open issue on GitLab: https://gitlab.arlcrow.site/arlcrow123/lisiywebsite/issues");
  }
});
