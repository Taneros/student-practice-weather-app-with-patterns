export class Page {
  constructor() {
    this.form = document.getElementById('form')
    this.cityInput = document.getElementById( 'cityInput' );
    this.temperature = document.getElementById('temperature');
    this.windDirection = document.getElementById('windDirection');
    this.precipitation = document.getElementById('precipitation');
  }

  submitFrom(callback) {
    this.form.addEventListener( 'submit', (event) => {
      event.preventDefault()

      const formData = new FormData( event.target )
      const cityName = formData.get( 'cityName' )
      
      callback(cityName)
    });
  }

  updateWeather ( data ) {
    this.temperature.textContent = `Temperature: ${data.temperature}°C`;
    this.windDirection.textContent = `Wind Direction: ${data.windDirection}`;
    this.precipitation.textContent = `Precipitation: ${ data.precipitation }%`;
    this.cityInput.value = data.cityName
  }
}