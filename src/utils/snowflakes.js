import Snowflakes from 'magic-snowflakes';

// Создаем экземпляр Snowflakes с настройками
const snowflakes = new Snowflakes({
  color: "#ffffff",
  count: 62,
  maxOpacity: 0.85,
  maxSize: 20,
  zIndex: 10,
});

document.addEventListener("DOMContentLoaded", () => {
  snowflakes.start();
  snowflakes.show();
});
