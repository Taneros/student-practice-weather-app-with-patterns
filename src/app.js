import { EventEmitter } from "./base/events/index.js";
import { Page } from "./components/Page.js";
import { Store } from "./store/index.js";

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  const events = new EventEmitter();

  const store = new Store(events);

  const page = new Page();

  page.submitFrom(store.setCity)
  
  
  const updateWeather = () => {
    page.updateWeather(store.weatherData);
  }

  const unSubscribe = events.on(updateWeather);
  
  store.fetch().then( () => {
    // events.trigger(updateWeather, {})
    unSubscribe()
  });
  
}
