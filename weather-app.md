# I want to create an weather app

- it should use opensource API to get weather data
- it should display
  - wind direction
  - temperature in Celsius
  - humidity
  - clouds etc.

# Realization

- it should use only HTML CSS and vanilla JS

- for js it should use OOP patterns
  - it should use singleton for storing fetched data
  - it should use pub/sub pattern to notify ui components when data in singleton changes based on selected input data is fetched for that city and stored in singleton
  - it should have split modules for rendering view 
  - other logic

- suggest folder and file structure

///

i want to create an app using pure js css html

i want to use EventEmitter as a bus to track changes in data model or if any  ui element initiates change with  certain event

create a classic event broker based on pub sub pattern

EventEmitter class should:

have methods

for on add listener


///

create a simple app using vanilla js html css
- uses MVP pattern - model view presenter
- uses classes

for an API it can use this mock API service
`export const getWeatherData = () => {
  return new Promise( ( res, rej ) => {
    setTimeout( () => {
      const data = {
        cityName: 'Moscow',
        temperature: 10,
        windDirection: 'NE',
        precipitation: 30
      }
      res(data)
    }, 1_500)
  })
}`

UI
should consist of
- city selector (by default is whatever is returned first)
- temparature
- wind dir
- precipitation

provide folder struncture
provide js files for realising MVP pattern



