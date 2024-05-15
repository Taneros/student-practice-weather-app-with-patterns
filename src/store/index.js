import {Model} from '../base/model/index.js';
import {getWeatherData} from '../services/getWeatherData.js';

export class Store extends Model{
  weatherData = {};

  set(value) {
    this.weatherData = value
    this.emitChanges()
  }

  get () {
    return this.weatherData
  }

  setCity = (value) => {
    this.fetch(value)
  }

  fetch = async (city) => {
    const data = await getWeatherData(city)
    this.set( data )
    console.log(`store/index.js - line: 23 ->> fetch`, this.get())
  }
}