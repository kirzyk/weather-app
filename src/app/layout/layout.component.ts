import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {uniqBy} from 'lodash';
import {SelectedWeather} from '../data/weather.data';
import {AppService} from '../app.service';
import {WeatherModel} from '../models/weather.model';

const MAX_ITEMS = 6;

@Component({
  selector: 'app-root',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {

  public formGroup: FormGroup;
  public weatherList: SelectedWeather[] = [];

  constructor(private formBuilder: FormBuilder, private service: AppService) {

  }

  ngOnInit() {
    this.formGroup = this.createFormGroup();
  }

  public async search(): Promise<void> {
    if (this.formGroup && this.formGroup.valid) {
      const insertedValues = this.formGroup.getRawValue();
      const city = insertedValues.city;
      try {
        const result = await this.service.getWeather(city);
        if (this.weatherList.length < MAX_ITEMS) {
          this.weatherList.push({
            id: result.id,
            weather: new WeatherModel(result),
          });
          this.formGroup = this.createFormGroup();
          this.weatherList = uniqBy(this.weatherList, 'id');
        }
      } catch (error) {
        if (error.status === 404) {
          alert('City not found!');
          this.formGroup = this.createFormGroup();
        }
      }
    }
  }

  public removeCity(id: number): void {
    const item = this.weatherList.find(city => city.id === id);
    const index = this.weatherList.indexOf(item);
    this.weatherList.splice(index, 1);
  }

  private createFormGroup(): FormGroup {
    return this.formBuilder.group({
      city: ['', [Validators.required, Validators.maxLength(40)]]
    });
  }
}
