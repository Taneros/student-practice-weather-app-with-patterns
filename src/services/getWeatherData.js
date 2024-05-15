export const getWeatherData = (value = 'Moscow') => {
  return new Promise( ( res, rej ) => {
    setTimeout( () => {
      const data = {
        cityName: value,
        temperature: 10,
        windDirection: 'NE',
        precipitation: 30
      }
      res(data)
    }, 1_500)
  })
}