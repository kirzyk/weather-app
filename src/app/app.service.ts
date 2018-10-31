import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WEATHER_URL} from '../constants/app.constant';
import {WeatherData} from './data/weather.data';

@Injectable()
export class AppService {

  constructor(private httpClient: HttpClient) {
  }

  public getWeather(city: string): Promise<WeatherData> {
    return this.httpClient.get<WeatherData>(WEATHER_URL(city)).toPromise();
  }
}
