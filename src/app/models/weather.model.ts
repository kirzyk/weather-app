import {Model} from '../../common/json-mapper';
import {Weather, WeatherData} from '../data/weather.data';

export class WeatherModel extends Model<WeatherData> {

  get id(): number {
    return this.data && this.data.id;
  }

  get city(): string {
    return this.data && this.data.name;
  }

  get weather(): Weather[] {
    return this.data && this.data.weather;
  }

  get temperature(): number {
    return this.data && this.data.main && this.data.main.temp;
  }

  get humidity(): number {
    return this.data && this.data.main && this.data.main.humidity;
  }

  get pressure(): number {
    return this.data && this.data.main && this.data.main.pressure;
  }

  get clouds(): number {
    return this.data && this.data.clouds && this.data.clouds.all;
  }

  get wind(): number {
    return this.data && this.data.wind && this.data.wind.speed;
  }

  constructor(json: WeatherData) {
    super(json);
  }

  toJSON() {
    return super.toJSON();
  }
}








