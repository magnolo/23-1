import { Injectable } from '@angular/core';
import { IsoValue } from '../core/isoValue.interface';

@Injectable()
export class DataService {

  mockData: Array<IsoValue> = [
    {
      iso: "AT",
      value: 20
    },
    {
      iso: "DE",
      value: 40
    },
    {
      iso: "ES",
      value: 60
    },
    {
      iso: "IT",
      value: 80
    },
    {
      iso: "CO",
      value: 100
    },
  ];

  constructor() {  }

  //Returns an IsoValue Type Array
  getValuesWithIso() {
    return this.mockData;
  }

}
