import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  mockData: any = [
    {
      iso: "AT",
      value: "20"
    },
    {
      iso: "DE",
      value: "40"
    },
    {
      iso: "ES",
      value: "60"
    },
    {
      iso: "IT",
      value: "80"
    },
    {
      iso: "CO",
      value: "100"
    },
  ];

  constructor() {  }

  getValuesWithIso() {
    return this.mockData;
  }

}
