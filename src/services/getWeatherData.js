export const getWeatherData = () => {
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
}