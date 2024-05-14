import { Store } from './store/index.js'

document.addEventListener( 'DOMContentLoaded', initApp )

export let store;

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


function initApp () {
  const events = new EventEmitter()

  store = new Store( events )
  
  store.fetch()



  // render

}