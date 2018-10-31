import {WeatherModel} from '../models/weather.model';

export interface WeatherData {
  id: number;
  name: string;
  cod: number;
  weather: Weather[];
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    id: number;
    type: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  clouds: {
    all: number;
  };
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface SelectedWeather {
  id: number;
  weather: WeatherModel;
}
