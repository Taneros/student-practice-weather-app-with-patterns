import { EventEmitter } from "./base/events/index.js";
import { Page } from "./components/Page.js";
import { Store } from "./store/index.js";

document.addEventListener("DOMContentLoaded", initApp);

// export let store;

//TODO
/**
 * where to place the observer ??
 * make factory for store + singleton
 *
 *
 **/

// export function createObserver () {
//   const listeners = []

//   return {
//     subscribe (listener) {
//       listeners.push( listener )
//       return () => listeners.filter(l => l === listener)
//     },
//     publish (event) {
//       listeners.forEach(l => l(event))
//     }
//   }
// }

// const observer = createObserver()

function initApp() {
  const events = new EventEmitter();

  const store = new Store(events);

  const page = new Page();

  page.submitFrom(store.setCity)

  events.onAll((data) => {
    // console.log( `src/app.js - line: 41 ->> onAll`, `eventName-${ eventName }`, `data-${data}`)
    console.log( `src/app.js - line: 41 ->> onAll`, `data-${JSON.stringify(data)}`)
  });

  events.on("data:changed", () => {
    page.updateWeather(store.weatherData);
  } );
  
  events.on("city:changed", () => {})

  store.fetch();
}
