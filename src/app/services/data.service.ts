import { Injectable } from '@angular/core';
import { Indicator } from '../core/indicator.class';
import { IsoValue } from '../core/isoValue.interface';


@Injectable()
export class DataService {

  mockData: Indicator = {
    id: 1,
    title: 'Hello I am Indicator',
    source: {
      title: 'Anuar Corp.',
      url: 'http://www.manfredwalder.at'
    },
    colors: [
      {
        stop: 0,
        color: 'red'
      },
      {
        stop: 1,
        color: 'green'
      }
    ],
    data: [
      {
        iso: "AT",
        value: 5
      },
      {
        iso: "DE",
        value: 10
      },
      {
        iso: "ES",
        value: 15
      },
      {
        iso: "IT",
        value: 20
      },
      {
        iso: "BE",
        value: 25
      },
      {
        iso: "BR",
        value: 35
      },
      {
        iso: "AR",
        value: 40
      },
      {
        iso: "CA",
        value: 45
      },
      {
        iso: "CN",
        value: 50
      },
      {
        iso: "CD",
        value: 55
      },
      {
        iso: "CZ",
        value: 60
      },
      {
        iso: "FI",
        value: 65
      },
      {
        iso: "GH",
        value: 70
      },
      {
        iso: "GR",
        value: 75
      },
      {
        iso: "DZ",
        value: 80
      },
      {
        iso: "RU",
        value: 85
      },
      {
        iso: "IN",
        value: 90
      },
      {
        iso: "US",
        value: 95
      },
      {
        iso: "CO",
        value: 100
      },
    ]
  };

  constructor() { }

  //Returns an IsoValue Type Array
  getValuesWithIso() {
    return this.mockData;
  }

}
