import { EventEmitter } from "./base/events/index.js";
import { Page } from "./components/Page.js";
import { Store } from "./store/index.js";

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  const events = new EventEmitter();

  const store = new Store(events);

  const page = new Page();

  page.submitFrom(store.setCity)

  events.onAll((data) => {
  });

  events.on("data:changed", () => {
    page.updateWeather(store.weatherData);
  } );
  
  events.on("city:changed", () => {})

  store.fetch();
}
