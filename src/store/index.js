import {getWeatherData} from '../services/getWeatherData.js';

export class Store extends Model{
  weatherData = {};

  set(value) {
    this.weatherData = value
    this.emitChanges('data:changed')
  }

  get () {
    return this.weatherData
  }

  async fetch () {
    const data = await getWeatherData()
    this.set( data )
    console.log('get', this.get());
  }
}