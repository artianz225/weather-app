export default function displayData(obj) {
  const form = document.querySelector("form");

  const prevArticle = document.querySelector(".card");
  prevArticle.remove();

  const article = `
  <article class="card">
      <div class="weather-icon-container">
          <img id="weather-icon" src="${obj.weatherIcon}" alt="">
      </div>
      <div class="weather-data-container">
          <h2 class="main-temp">${obj.weatherData.main.temp} °C</h2>
          <p class="weather-main">${obj.weatherData.weather[0].main}</p>
          <p class="date">${new Date()}</p>
      </div>
  </article>
  `;

  form.innerHTML += article;
}