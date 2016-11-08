import { Injectable } from '@angular/core';
import { Indicator } from '../core/models/indicator.model';
import { GeoJSONSource } from 'mapbox-gl';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import * as D3 from 'd3';

@Injectable()
export class DataService {

  mockData: any = {
    id: 1,
    title: 'Hello World Indicator',
    source: {
      title: 'Anuar Corp.',
      url: 'http://www.manfredwalder.at'
    },
    colors: [
      {
        stop: 0,
        color: '#d7191c',
        title: 'Low'
      },
      {
        stop: .33,
        color: '#fdae61',
        title: 'Medium Low'
      },
      {
        stop: 5,
        color: '#ffffbf',
        title: 'Medium'
      },
      {
        stop: .75,
        color: '#abd9e9',
        title: 'Medium High'
      },
      {
        stop: 1,
        color: '#2c7bb6',
        title: 'High'
      }
    ],
    data: [
     {
       "year": 2012,
       "value": 1.2,
       "iso": "AF"
     },
     {
       "year": 2012,
       "value": 47.56,
       "iso": "AL"
     },
     {
       "year": 2012,
       "value": 86.62,
       "iso": "DZ"
     },
     {
       "year": 2012,
       "value": 63.18,
       "iso": "AO"
     },
     {
       "year": 2012,
       "value": 75.26,
       "iso": "AG"
     },
     {
       "year": 2012,
       "value": 30.83,
       "iso": "AR"
     },
     {
       "year": 2012,
       "value": 99.3,
       "iso": "AM"
     },
     {
       "year": 2012,
       "value": 82.08,
       "iso": "AU"
     },
     {
       "year": 2012,
       "value": 14.4,
       "iso": "AT"
     },
     {
       "year": 2012,
       "value": 79.34,
       "iso": "AZ"
     },
     {
       "year": 2012,
       "value": 55.54,
       "iso": "BS"
     },
     {
       "year": 2012,
       "value": 63.07,
       "iso": "BH"
     },
     {
       "year": 2012,
       "value": 8.7,
       "iso": "BD"
     },
     {
       "year": 2012,
       "value": 47.68,
       "iso": "BB"
     },
     {
       "year": 2012,
       "value": 25.15,
       "iso": "BY"
     },
     {
       "year": 2012,
       "value": 98.41,
       "iso": "BE"
     },
     {
       "year": 2012,
       "value": 56.69,
       "iso": "BZ"
     },
     {
       "year": 2012,
       "value": 2.3,
       "iso": "BJ"
     },
     {
       "year": 2012,
       "value": 81.29,
       "iso": "BT"
     },
     {
       "year": 2012,
       "value": 74.14,
       "iso": "BO"
     },
     {
       "year": 2012,
       "value": 56.23,
       "iso": "BA"
     },
     {
       "year": 2012,
       "value": 33.33,
       "iso": "BW"
     },
     {
       "year": 2012,
       "value": 12.89,
       "iso": "BR"
     },
     {
       "year": 2012,
       "value": 30.14,
       "iso": "BN"
     },
     {
       "year": 2012,
       "value": 42.84,
       "iso": "BG"
     },
     {
       "year": 2012,
       "value": 17.01,
       "iso": "BF"
     },
     {
       "year": 2012,
       "value": 4.64,
       "iso": "BI"
     },
     {
       "year": 2012,
       "value": 24.1,
       "iso": "KH"
     },
     {
       "year": 2012,
       "value": 85.18,
       "iso": "CM"
     },
     {
       "year": 2012,
       "value": 39.99,
       "iso": "CA"
     },
     {
       "year": 2012,
       "value": 3.59,
       "iso": "CF"
     },
     {
       "year": 2012,
       "value": 15.7,
       "iso": "TD"
     },
     {
       "year": 2012,
       "value": 66.76,
       "iso": "CL"
     },
     {
       "year": 2012,
       "value": 35.12,
       "iso": "CN"
     },
     {
       "year": 2012,
       "value": 27.4,
       "iso": "CO"
     },
     {
       "year": 2012,
       "value": 19.08,
       "iso": "KM"
     },
     {
       "year": 2012,
       "value": 18.81,
       "iso": "CG"
     },
     {
       "year": 2012,
       "value": 29.29,
       "iso": "CR"
     },
     {
       "year": 2012,
       "value": 37.96,
       "iso": "CI"
     },
     {
       "year": 2012,
       "value": 42.38,
       "iso": "HR"
     },
     {
       "year": 2012,
       "value": 39.57,
       "iso": "CU"
     },
     {
       "year": 2012,
       "value": 34.88,
       "iso": "CY"
     },
     {
       "year": 2012,
       "value": 40.07,
       "iso": "CZ"
     },
     {
       "year": 2012,
       "value": 33.4,
       "iso": "KP"
     },
     {
       "year": 2012,
       "value": 17.27,
       "iso": "CD"
     },
     {
       "year": 2012,
       "value": 69.95,
       "iso": "DK"
     },
     {
       "year": 2012,
       "value": 79.55,
       "iso": "DJ"
     },
     {
       "year": 2012,
       "value": 70.53,
       "iso": "DO"
     },
     {
       "year": 2012,
       "value": 29.83,
       "iso": "EC"
     },
     {
       "year": 2012,
       "value": 24.93,
       "iso": "EG"
     },
     {
       "year": 2012,
       "value": 3.78,
       "iso": "SV"
     },
     {
       "year": 2012,
       "value": 40.49,
       "iso": "GQ"
     },
     {
       "year": 2012,
       "value": 18.37,
       "iso": "ER"
     },
     {
       "year": 2012,
       "value": 77.78,
       "iso": "EE"
     },
     {
       "year": 2012,
       "value": 7.93,
       "iso": "ET"
     },
     {
       "year": 2012,
       "value": 26.88,
       "iso": "FJ"
     },
     {
       "year": 2012,
       "value": 59.24,
       "iso": "FI"
     },
     {
       "year": 2012,
       "value": 40.43,
       "iso": "FR"
     },
     {
       "year": 2012,
       "value": 20.66,
       "iso": "GA"
     },
     {
       "year": 2012,
       "value": 16.95,
       "iso": "GM"
     },
     {
       "year": 2012,
       "value": 37.43,
       "iso": "GE"
     },
     {
       "year": 2012,
       "value": 45.09,
       "iso": "DE"
     },
     {
       "year": 2012,
       "value": 20.45,
       "iso": "GH"
     },
     {
       "year": 2012,
       "value": 42.47,
       "iso": "GR"
     },
     {
       "year": 2012,
       "value": 25.89,
       "iso": "GD"
     },
     {
       "year": 2012,
       "value": 19.19,
       "iso": "GT"
     },
     {
       "year": 2012,
       "value": 18.53,
       "iso": "GN"
     },
     {
       "year": 2012,
       "value": 18.97,
       "iso": "GW"
     },
     {
       "year": 2012,
       "value": 22.36,
       "iso": "GY"
     },
     {
       "year": 2012,
       "value": 21.99,
       "iso": "HT"
     },
     {
       "year": 2012,
       "value": 21.57,
       "iso": "HN"
     },
     {
       "year": 2012,
       "value": 40.35,
       "iso": "HU"
     },
     {
       "year": 2012,
       "value": 35.3,
       "iso": "IS"
     },
     {
       "year": 2012,
       "value": 26.07,
       "iso": "IN"
     },
     {
       "year": 2012,
       "value": 27.47,
       "iso": "ID"
     },
     {
       "year": 2012,
       "value": 27.99,
       "iso": "IR"
     },
     {
       "year": 2012,
       "value": 19.5,
       "iso": "IQ"
     },
     {
       "year": 2012,
       "value": 34.94,
       "iso": "IE"
     },
     {
       "year": 2012,
       "value": 30.1,
       "iso": "IL"
     },
     {
       "year": 2012,
       "value": 43.99,
       "iso": "IT"
     },
     {
       "year": 2012,
       "value": 27.5,
       "iso": "JM"
     },
     {
       "year": 2012,
       "value": 45.53,
       "iso": "JP"
     },
     {
       "year": 2012,
       "value": 23.06,
       "iso": "JO"
     },
     {
       "year": 2012,
       "value": 29.2,
       "iso": "KZ"
     },
     {
       "year": 2012,
       "value": 18.72,
       "iso": "KE"
     },
     {
       "year": 2012,
       "value": 23.15,
       "iso": "KI"
     },
     {
       "year": 2012,
       "value": 28.95,
       "iso": "KW"
     },
     {
       "year": 2012,
       "value": 24.34,
       "iso": "KG"
     },
     {
       "year": 2012,
       "value": 21.02,
       "iso": "LA"
     },
     {
       "year": 2012,
       "value": 41.44,
       "iso": "LV"
     },
     {
       "year": 2012,
       "value": 29.4,
       "iso": "LB"
     },
     {
       "year": 2012,
       "value": 20.53,
       "iso": "LS"
     },
     {
       "year": 2012,
       "value": 18.43,
       "iso": "LR"
     },
     {
       "year": 2012,
       "value": 26.25,
       "iso": "LY"
     },
     {
       "year": 2012,
       "value": 39.09,
       "iso": "LT"
     },
     {
       "year": 2012,
       "value": 39,
       "iso": "LU"
     },
     {
       "year": 2012,
       "value": 18.3,
       "iso": "MG"
     },
     {
       "year": 2012,
       "value": 17.06,
       "iso": "MW"
     },
     {
       "year": 2012,
       "value": 26.99,
       "iso": "MY"
     },
     {
       "year": 2012,
       "value": 24.53,
       "iso": "MV"
     },
     {
       "year": 2012,
       "value": 16.39,
       "iso": "ML"
     },
     {
       "year": 2012,
       "value": 40.65,
       "iso": "MT"
     },
     {
       "year": 2012,
       "value": 19.71,
       "iso": "MR"
     },
     {
       "year": 2012,
       "value": 34.18,
       "iso": "MU"
     },
     {
       "year": 2012,
       "value": 26.64,
       "iso": "MX"
     },
     {
       "year": 2012,
       "value": 20.73,
       "iso": "FM"
     },
     {
       "year": 2012,
       "value": 26.4,
       "iso": "MN"
     },
     {
       "year": 2012,
       "value": 36.82,
       "iso": "ME"
     },
     {
       "year": 2012,
       "value": 26.7,
       "iso": "MA"
     },
     {
       "year": 2012,
       "value": 17.26,
       "iso": "MZ"
     },
     {
       "year": 2012,
       "value": 28.62,
       "iso": "MM"
     },
     {
       "year": 2012,
       "value": 20.94,
       "iso": "NA"
     },
     {
       "year": 2012,
       "value": 22.02,
       "iso": "NP"
     },
     {
       "year": 2012,
       "value": 41.47,
       "iso": "NL"
     },
     {
       "year": 2012,
       "value": 36.85,
       "iso": "NZ"
     },
     {
       "year": 2012,
       "value": 22.74,
       "iso": "NI"
     },
     {
       "year": 2012,
       "value": 15.04,
       "iso": "NE"
     },
     {
       "year": 2012,
       "value": 17.84,
       "iso": "NG"
     },
     {
       "year": 2012,
       "value": 38.88,
       "iso": "NO"
     },
     {
       "year": 2012,
       "value": 25.88,
       "iso": "OM"
     },
     {
       "year": 2012,
       "value": 22.23,
       "iso": "PK"
     },
     {
       "year": 2012,
       "value": 27.64,
       "iso": "PA"
     },
     {
       "year": 2012,
       "value": 20.72,
       "iso": "PG"
     },
     {
       "year": 2012,
       "value": 23.59,
       "iso": "PY"
     },
     {
       "year": 2012,
       "value": 26.16,
       "iso": "PE"
     },
     {
       "year": 2012,
       "value": 22.74,
       "iso": "PH"
     },
     {
       "year": 2012,
       "value": 38.55,
       "iso": "PL"
     },
     {
       "year": 2012,
       "value": 41.81,
       "iso": "PT"
     },
     {
       "year": 2012,
       "value": 31.64,
       "iso": "QA"
     },
     {
       "year": 2012,
       "value": 38.85,
       "iso": "KR"
     },
     {
       "year": 2012,
       "value": 35.61,
       "iso": "MD"
     },
     {
       "year": 2012,
       "value": 39.09,
       "iso": "RO"
     },
     {
       "year": 2012,
       "value": 38.22,
       "iso": "RU"
     },
     {
       "year": 2012,
       "value": 18.05,
       "iso": "RW"
     },
     {
       "year": 2012,
       "value": 30.17,
       "iso": "LC"
     },
     {
       "year": 2012,
       "value": 28.64,
       "iso": "VC"
     },
     {
       "year": 2012,
       "value": 20.95,
       "iso": "WS"
     },
     {
       "year": 2012,
       "value": 19.13,
       "iso": "ST"
     },
     {
       "year": 2012,
       "value": 27.03,
       "iso": "SA"
     },
     {
       "year": 2012,
       "value": 18.01,
       "iso": "SN"
     },
     {
       "year": 2012,
       "value": 38.38,
       "iso": "RS"
     },
     {
       "year": 2012,
       "value": 32.26,
       "iso": "SC"
     },
     {
       "year": 2012,
       "value": 18.98,
       "iso": "SL"
     },
     {
       "year": 2012,
       "value": 37.88,
       "iso": "SG"
     },
     {
       "year": 2012,
       "value": 37.87,
       "iso": "SK"
     },
     {
       "year": 2012,
       "value": 42.1,
       "iso": "SI"
     },
     {
       "year": 2012,
       "value": 19.62,
       "iso": "SB"
     },
     {
       "year": 2012,
       "value": 16.25,
       "iso": "SO"
     },
     {
       "year": 2012,
       "value": 25.7,
       "iso": "ZA"
     },
     {
       "year": 2012,
       "value": 18.52,
       "iso": "SS"
     },
     {
       "year": 2012,
       "value": 40.99,
       "iso": "ES"
     },
     {
       "year": 2012,
       "value": 31.12,
       "iso": "LK"
     },
     {
       "year": 2012,
       "value": 19.02,
       "iso": "SD"
     },
     {
       "year": 2012,
       "value": 28.18,
       "iso": "SR"
     },
     {
       "year": 2012,
       "value": 19.82,
       "iso": "SZ"
     },
     {
       "year": 2012,
       "value": 40.91,
       "iso": "SE"
     },
     {
       "year": 2012,
       "value": 41.85,
       "iso": "CH"
     },
     {
       "year": 2012,
       "value": 22.21,
       "iso": "SY"
     },
     {
       "year": 2012,
       "value": 21.54,
       "iso": "TJ"
     },
     {
       "year": 2012,
       "value": 36.42,
       "iso": "TH"
     },
     {
       "year": 2012,
       "value": 36.79,
       "iso": "MK"
     },
     {
       "year": 2012,
       "value": 16.4,
       "iso": "TL"
     },
     {
       "year": 2012,
       "value": 18.82,
       "iso": "TG"
     },
     {
       "year": 2012,
       "value": 21.28,
       "iso": "TO"
     },
     {
       "year": 2012,
       "value": 32.84,
       "iso": "TT"
     },
     {
       "year": 2012,
       "value": 29.89,
       "iso": "TN"
     },
     {
       "year": 2012,
       "value": 29.04,
       "iso": "TR"
     },
     {
       "year": 2012,
       "value": 25.26,
       "iso": "TM"
     },
     {
       "year": 2012,
       "value": 15.68,
       "iso": "UG"
     },
     {
       "year": 2012,
       "value": 39.62,
       "iso": "UA"
     },
     {
       "year": 2012,
       "value": 29.37,
       "iso": "AE"
     },
     {
       "year": 2012,
       "value": 40.07,
       "iso": "GB"
     },
     {
       "year": 2012,
       "value": 17.49,
       "iso": "TZ"
     },
     {
       "year": 2012,
       "value": 37.3,
       "iso": "US"
     },
     {
       "year": 2012,
       "value": 34.16,
       "iso": "UY"
     },
     {
       "year": 2012,
       "value": 24.88,
       "iso": "UZ"
     },
     {
       "year": 2012,
       "value": 21.56,
       "iso": "VU"
     },
     {
       "year": 2012,
       "value": 26.73,
       "iso": "VE"
     },
     {
       "year": 2012,
       "value": 29.41,
       "iso": "VN"
     },
     {
       "year": 2012,
       "value": 18.78,
       "iso": "YE"
     },
     {
       "year": 2012,
       "value": 16.54,
       "iso": "ZM"
     },
     {
       "year": 2012,
       "value": 19.18,
       "iso": "ZW"
     }
    ]
  };

  constructor(public http: Http) {
  }

  //Returns an IsoValue Type Array
  getValuesWithIso() {
    return this.mockData;
  }

  //Returns Tile of Data
  getTitle() {
    return this.mockData.title;
  }

  //Returns Data Source
  getDataSource() {
    return this.mockData.source;
  }

  getGeoJsonData() {
    return this.http.request('assets/earthquakes2015.geojson').map((res: Response) => res.json());
  }

}
