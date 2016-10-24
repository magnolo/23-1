import { Injectable } from '@angular/core';
import { Indicator } from '../core/indicator.class';

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
        color: 'red',
        title: 'Low'
      },
      {
        stop: .33,
        color: 'yellow',
        title: 'Medium Low'
      },
      {
        stop: 5,
        color: 'green',
        title: 'Medium'
      },
      {
        stop: .75,
        color: 'blue',
        title: 'Medium High'
      },
      {
        stop: 1,
        color: 'violet',
        title: 'High'
      }
    ],
    data: [
     {
       "country_name": "Afghanistan",
       "year": 2012,
       "value": 16.2,
       "iso": "AF"
     },
     {
       "country_name": "Albania",
       "year": 2012,
       "value": 32.56,
       "iso": "AL"
     },
     {
       "country_name": "Algeria",
       "year": 2012,
       "value": 26.62,
       "iso": "DZ"
     },
     {
       "country_name": "Angola",
       "year": 2012,
       "value": 16.18,
       "iso": "AO"
     },
     {
       "country_name": "Antigua and Barbuda",
       "year": 2012,
       "value": 30.26,
       "iso": "AG"
     },
     {
       "country_name": "Argentina",
       "year": 2012,
       "value": 30.83,
       "iso": "AR"
     },
     {
       "country_name": "Armenia",
       "year": 2012,
       "value": 32.3,
       "iso": "AM"
     },
     {
       "country_name": "Australia",
       "year": 2012,
       "value": 37.08,
       "iso": "AU"
     },
     {
       "country_name": "Austria",
       "year": 2012,
       "value": 42.4,
       "iso": "AT"
     },
     {
       "country_name": "Azerbaijan",
       "year": 2012,
       "value": 29.34,
       "iso": "AZ"
     },
     {
       "country_name": "Bahamas",
       "year": 2012,
       "value": 31.54,
       "iso": "BS"
     },
     {
       "country_name": "Bahrain",
       "year": 2012,
       "value": 30.07,
       "iso": "BH"
     },
     {
       "country_name": "Bangladesh",
       "year": 2012,
       "value": 24.7,
       "iso": "BD"
     },
     {
       "country_name": "Barbados",
       "year": 2012,
       "value": 36.68,
       "iso": "BB"
     },
     {
       "country_name": "Belarus",
       "year": 2012,
       "value": 39.15,
       "iso": "BY"
     },
     {
       "country_name": "Belgium",
       "year": 2012,
       "value": 41.41,
       "iso": "BE"
     },
     {
       "country_name": "Belize",
       "year": 2012,
       "value": 22.69,
       "iso": "BZ"
     },
     {
       "country_name": "Benin",
       "year": 2012,
       "value": 18.3,
       "iso": "BJ"
     },
     {
       "country_name": "Bhutan",
       "year": 2012,
       "value": 25.29,
       "iso": "BT"
     },
     {
       "country_name": "Bolivia (Plurinational State of)",
       "year": 2012,
       "value": 22.14,
       "iso": "BO"
     },
     {
       "country_name": "Bosnia and Herzegovina",
       "year": 2012,
       "value": 39.23,
       "iso": "BA"
     },
     {
       "country_name": "Botswana",
       "year": 2012,
       "value": 22.33,
       "iso": "BW"
     },
     {
       "country_name": "Brazil",
       "year": 2012,
       "value": 29.89,
       "iso": "BR"
     },
     {
       "country_name": "Brunei Darussalam",
       "year": 2012,
       "value": 30.14,
       "iso": "BN"
     },
     {
       "country_name": "Bulgaria",
       "year": 2012,
       "value": 42.84,
       "iso": "BG"
     },
     {
       "country_name": "Burkina Faso",
       "year": 2012,
       "value": 17.01,
       "iso": "BF"
     },
     {
       "country_name": "Burundi",
       "year": 2012,
       "value": 17.64,
       "iso": "BI"
     },
     {
       "country_name": "Cabo Verde",
       "year": 2012,
       "value": 23.71,
       "iso": "#NA"
     },
     {
       "country_name": "Cambodia",
       "year": 2012,
       "value": 24.1,
       "iso": "KH"
     },
     {
       "country_name": "Cameroon",
       "year": 2012,
       "value": 18.18,
       "iso": "CM"
     },
     {
       "country_name": "Canada",
       "year": 2012,
       "value": 39.99,
       "iso": "CA"
     },
     {
       "country_name": "Central African Republic",
       "year": 2012,
       "value": 19.59,
       "iso": "CF"
     },
     {
       "country_name": "Chad",
       "year": 2012,
       "value": 15.7,
       "iso": "TD"
     },
     {
       "country_name": "Chile",
       "year": 2012,
       "value": 32.76,
       "iso": "CL"
     },
     {
       "country_name": "China",
       "year": 2012,
       "value": 35.12,
       "iso": "CN"
     },
     {
       "country_name": "Colombia",
       "year": 2012,
       "value": 27.4,
       "iso": "CO"
     },
     {
       "country_name": "Comoros",
       "year": 2012,
       "value": 19.08,
       "iso": "KM"
     },
     {
       "country_name": "Congo",
       "year": 2012,
       "value": 18.81,
       "iso": "CG"
     },
     {
       "country_name": "Costa Rica",
       "year": 2012,
       "value": 29.29,
       "iso": "CR"
     },
     {
       "country_name": "Côte d’Ivoire",
       "year": 2012,
       "value": 18.96,
       "iso": "CI"
     },
     {
       "country_name": "Croatia",
       "year": 2012,
       "value": 42.38,
       "iso": "HR"
     },
     {
       "country_name": "Cuba",
       "year": 2012,
       "value": 39.57,
       "iso": "CU"
     },
     {
       "country_name": "Cyprus",
       "year": 2012,
       "value": 34.88,
       "iso": "CY"
     },
     {
       "country_name": "Czech Republic",
       "year": 2012,
       "value": 40.07,
       "iso": "CZ"
     },
     {
       "country_name": "Democratic People's Republic of Korea",
       "year": 2012,
       "value": 33.4,
       "iso": "KP"
     },
     {
       "country_name": "Democratic Republic of the Congo",
       "year": 2012,
       "value": 17.27,
       "iso": "CD"
     },
     {
       "country_name": "Denmark",
       "year": 2012,
       "value": 40.95,
       "iso": "DK"
     },
     {
       "country_name": "Djibouti",
       "year": 2012,
       "value": 22.55,
       "iso": "DJ"
     },
     {
       "country_name": "Dominican Republic",
       "year": 2012,
       "value": 25.53,
       "iso": "DO"
     },
     {
       "country_name": "Ecuador",
       "year": 2012,
       "value": 25.83,
       "iso": "EC"
     },
     {
       "country_name": "Egypt",
       "year": 2012,
       "value": 24.93,
       "iso": "EG"
     },
     {
       "country_name": "El Salvador",
       "year": 2012,
       "value": 23.78,
       "iso": "SV"
     },
     {
       "country_name": "Equatorial Guinea",
       "year": 2012,
       "value": 20.49,
       "iso": "GQ"
     },
     {
       "country_name": "Eritrea",
       "year": 2012,
       "value": 18.37,
       "iso": "ER"
     },
     {
       "country_name": "Estonia",
       "year": 2012,
       "value": 40.78,
       "iso": "EE"
     },
     {
       "country_name": "Ethiopia",
       "year": 2012,
       "value": 17.93,
       "iso": "ET"
     },
     {
       "country_name": "Fiji",
       "year": 2012,
       "value": 26.88,
       "iso": "FJ"
     },
     {
       "country_name": "Finland",
       "year": 2012,
       "value": 42.24,
       "iso": "FI"
     },
     {
       "country_name": "France",
       "year": 2012,
       "value": 40.43,
       "iso": "FR"
     },
     {
       "country_name": "Gabon",
       "year": 2012,
       "value": 20.66,
       "iso": "GA"
     },
     {
       "country_name": "Gambia",
       "year": 2012,
       "value": 16.95,
       "iso": "GM"
     },
     {
       "country_name": "Georgia",
       "year": 2012,
       "value": 37.43,
       "iso": "GE"
     },
     {
       "country_name": "Germany",
       "year": 2012,
       "value": 45.09,
       "iso": "DE"
     },
     {
       "country_name": "Ghana",
       "year": 2012,
       "value": 20.45,
       "iso": "GH"
     },
     {
       "country_name": "Greece",
       "year": 2012,
       "value": 42.47,
       "iso": "GR"
     },
     {
       "country_name": "Grenada",
       "year": 2012,
       "value": 25.89,
       "iso": "GD"
     },
     {
       "country_name": "Guatemala",
       "year": 2012,
       "value": 19.19,
       "iso": "GT"
     },
     {
       "country_name": "Guinea",
       "year": 2012,
       "value": 18.53,
       "iso": "GN"
     },
     {
       "country_name": "Guinea-Bissau",
       "year": 2012,
       "value": 18.97,
       "iso": "GW"
     },
     {
       "country_name": "Guyana",
       "year": 2012,
       "value": 22.36,
       "iso": "GY"
     },
     {
       "country_name": "Haiti",
       "year": 2012,
       "value": 21.99,
       "iso": "HT"
     },
     {
       "country_name": "Honduras",
       "year": 2012,
       "value": 21.57,
       "iso": "HN"
     },
     {
       "country_name": "Hungary",
       "year": 2012,
       "value": 40.35,
       "iso": "HU"
     },
     {
       "country_name": "Iceland",
       "year": 2012,
       "value": 35.3,
       "iso": "IS"
     },
     {
       "country_name": "India",
       "year": 2012,
       "value": 26.07,
       "iso": "IN"
     },
     {
       "country_name": "Indonesia",
       "year": 2012,
       "value": 27.47,
       "iso": "ID"
     },
     {
       "country_name": "Iran (Islamic Republic of)",
       "year": 2012,
       "value": 27.99,
       "iso": "IR"
     },
     {
       "country_name": "Iraq",
       "year": 2012,
       "value": 19.5,
       "iso": "IQ"
     },
     {
       "country_name": "Ireland",
       "year": 2012,
       "value": 34.94,
       "iso": "IE"
     },
     {
       "country_name": "Israel",
       "year": 2012,
       "value": 30.1,
       "iso": "IL"
     },
     {
       "country_name": "Italy",
       "year": 2012,
       "value": 43.99,
       "iso": "IT"
     },
     {
       "country_name": "Jamaica",
       "year": 2012,
       "value": 27.5,
       "iso": "JM"
     },
     {
       "country_name": "Japan",
       "year": 2012,
       "value": 45.53,
       "iso": "JP"
     },
     {
       "country_name": "Jordan",
       "year": 2012,
       "value": 23.06,
       "iso": "JO"
     },
     {
       "country_name": "Kazakhstan",
       "year": 2012,
       "value": 29.2,
       "iso": "KZ"
     },
     {
       "country_name": "Kenya",
       "year": 2012,
       "value": 18.72,
       "iso": "KE"
     },
     {
       "country_name": "Kiribati",
       "year": 2012,
       "value": 23.15,
       "iso": "KI"
     },
     {
       "country_name": "Kuwait",
       "year": 2012,
       "value": 28.95,
       "iso": "KW"
     },
     {
       "country_name": "Kyrgyzstan",
       "year": 2012,
       "value": 24.34,
       "iso": "KG"
     },
     {
       "country_name": "Lao People's Democratic Republic",
       "year": 2012,
       "value": 21.02,
       "iso": "LA"
     },
     {
       "country_name": "Latvia",
       "year": 2012,
       "value": 41.44,
       "iso": "LV"
     },
     {
       "country_name": "Lebanon",
       "year": 2012,
       "value": 29.4,
       "iso": "LB"
     },
     {
       "country_name": "Lesotho",
       "year": 2012,
       "value": 20.53,
       "iso": "LS"
     },
     {
       "country_name": "Liberia",
       "year": 2012,
       "value": 18.43,
       "iso": "LR"
     },
     {
       "country_name": "Libya",
       "year": 2012,
       "value": 26.25,
       "iso": "LY"
     },
     {
       "country_name": "Lithuania",
       "year": 2012,
       "value": 39.09,
       "iso": "LT"
     },
     {
       "country_name": "Luxembourg",
       "year": 2012,
       "value": 39,
       "iso": "LU"
     },
     {
       "country_name": "Madagascar",
       "year": 2012,
       "value": 18.3,
       "iso": "MG"
     },
     {
       "country_name": "Malawi",
       "year": 2012,
       "value": 17.06,
       "iso": "MW"
     },
     {
       "country_name": "Malaysia",
       "year": 2012,
       "value": 26.99,
       "iso": "MY"
     },
     {
       "country_name": "Maldives",
       "year": 2012,
       "value": 24.53,
       "iso": "MV"
     },
     {
       "country_name": "Mali",
       "year": 2012,
       "value": 16.39,
       "iso": "ML"
     },
     {
       "country_name": "Malta",
       "year": 2012,
       "value": 40.65,
       "iso": "MT"
     },
     {
       "country_name": "Mauritania",
       "year": 2012,
       "value": 19.71,
       "iso": "MR"
     },
     {
       "country_name": "Mauritius",
       "year": 2012,
       "value": 34.18,
       "iso": "MU"
     },
     {
       "country_name": "Mexico",
       "year": 2012,
       "value": 26.64,
       "iso": "MX"
     },
     {
       "country_name": "Micronesia (Federated States of)",
       "year": 2012,
       "value": 20.73,
       "iso": "FM"
     },
     {
       "country_name": "Mongolia",
       "year": 2012,
       "value": 26.4,
       "iso": "MN"
     },
     {
       "country_name": "Montenegro",
       "year": 2012,
       "value": 36.82,
       "iso": "ME"
     },
     {
       "country_name": "Morocco",
       "year": 2012,
       "value": 26.7,
       "iso": "MA"
     },
     {
       "country_name": "Mozambique",
       "year": 2012,
       "value": 17.26,
       "iso": "MZ"
     },
     {
       "country_name": "Myanmar",
       "year": 2012,
       "value": 28.62,
       "iso": "MM"
     },
     {
       "country_name": "Namibia",
       "year": 2012,
       "value": 20.94,
       "iso": "NA"
     },
     {
       "country_name": "Nepal",
       "year": 2012,
       "value": 22.02,
       "iso": "NP"
     },
     {
       "country_name": "Netherlands",
       "year": 2012,
       "value": 41.47,
       "iso": "NL"
     },
     {
       "country_name": "New Zealand",
       "year": 2012,
       "value": 36.85,
       "iso": "NZ"
     },
     {
       "country_name": "Nicaragua",
       "year": 2012,
       "value": 22.74,
       "iso": "NI"
     },
     {
       "country_name": "Niger",
       "year": 2012,
       "value": 15.04,
       "iso": "NE"
     },
     {
       "country_name": "Nigeria",
       "year": 2012,
       "value": 17.84,
       "iso": "NG"
     },
     {
       "country_name": "Norway",
       "year": 2012,
       "value": 38.88,
       "iso": "NO"
     },
     {
       "country_name": "Oman",
       "year": 2012,
       "value": 25.88,
       "iso": "OM"
     },
     {
       "country_name": "Pakistan",
       "year": 2012,
       "value": 22.23,
       "iso": "PK"
     },
     {
       "country_name": "Panama",
       "year": 2012,
       "value": 27.64,
       "iso": "PA"
     },
     {
       "country_name": "Papua New Guinea",
       "year": 2012,
       "value": 20.72,
       "iso": "PG"
     },
     {
       "country_name": "Paraguay",
       "year": 2012,
       "value": 23.59,
       "iso": "PY"
     },
     {
       "country_name": "Peru",
       "year": 2012,
       "value": 26.16,
       "iso": "PE"
     },
     {
       "country_name": "Philippines",
       "year": 2012,
       "value": 22.74,
       "iso": "PH"
     },
     {
       "country_name": "Poland",
       "year": 2012,
       "value": 38.55,
       "iso": "PL"
     },
     {
       "country_name": "Portugal",
       "year": 2012,
       "value": 41.81,
       "iso": "PT"
     },
     {
       "country_name": "Qatar",
       "year": 2012,
       "value": 31.64,
       "iso": "QA"
     },
     {
       "country_name": "Republic of Korea",
       "year": 2012,
       "value": 38.85,
       "iso": "KR"
     },
     {
       "country_name": "Republic of Moldova",
       "year": 2012,
       "value": 35.61,
       "iso": "MD"
     },
     {
       "country_name": "Romania",
       "year": 2012,
       "value": 39.09,
       "iso": "RO"
     },
     {
       "country_name": "Russian Federation",
       "year": 2012,
       "value": 38.22,
       "iso": "RU"
     },
     {
       "country_name": "Rwanda",
       "year": 2012,
       "value": 18.05,
       "iso": "RW"
     },
     {
       "country_name": "Saint Lucia",
       "year": 2012,
       "value": 30.17,
       "iso": "LC"
     },
     {
       "country_name": "Saint Vincent and the Grenadines",
       "year": 2012,
       "value": 28.64,
       "iso": "VC"
     },
     {
       "country_name": "Samoa",
       "year": 2012,
       "value": 20.95,
       "iso": "WS"
     },
     {
       "country_name": "Sao Tome and Principe",
       "year": 2012,
       "value": 19.13,
       "iso": "ST"
     },
     {
       "country_name": "Saudi Arabia",
       "year": 2012,
       "value": 27.03,
       "iso": "SA"
     },
     {
       "country_name": "Senegal",
       "year": 2012,
       "value": 18.01,
       "iso": "SN"
     },
     {
       "country_name": "Serbia",
       "year": 2012,
       "value": 38.38,
       "iso": "RS"
     },
     {
       "country_name": "Seychelles",
       "year": 2012,
       "value": 32.26,
       "iso": "SC"
     },
     {
       "country_name": "Sierra Leone",
       "year": 2012,
       "value": 18.98,
       "iso": "SL"
     },
     {
       "country_name": "Singapore",
       "year": 2012,
       "value": 37.88,
       "iso": "SG"
     },
     {
       "country_name": "Slovakia",
       "year": 2012,
       "value": 37.87,
       "iso": "SK"
     },
     {
       "country_name": "Slovenia",
       "year": 2012,
       "value": 42.1,
       "iso": "SI"
     },
     {
       "country_name": "Solomon Islands",
       "year": 2012,
       "value": 19.62,
       "iso": "SB"
     },
     {
       "country_name": "Somalia",
       "year": 2012,
       "value": 16.25,
       "iso": "SO"
     },
     {
       "country_name": "South Africa",
       "year": 2012,
       "value": 25.7,
       "iso": "ZA"
     },
     {
       "country_name": "South Sudan",
       "year": 2012,
       "value": 18.52,
       "iso": "SS"
     },
     {
       "country_name": "Spain",
       "year": 2012,
       "value": 40.99,
       "iso": "ES"
     },
     {
       "country_name": "Sri Lanka",
       "year": 2012,
       "value": 31.12,
       "iso": "LK"
     },
     {
       "country_name": "Sudan",
       "year": 2012,
       "value": 19.02,
       "iso": "SD"
     },
     {
       "country_name": "Suriname",
       "year": 2012,
       "value": 28.18,
       "iso": "SR"
     },
     {
       "country_name": "Swaziland",
       "year": 2012,
       "value": 19.82,
       "iso": "SZ"
     },
     {
       "country_name": "Sweden",
       "year": 2012,
       "value": 40.91,
       "iso": "SE"
     },
     {
       "country_name": "Switzerland",
       "year": 2012,
       "value": 41.85,
       "iso": "CH"
     },
     {
       "country_name": "Syrian Arab Republic",
       "year": 2012,
       "value": 22.21,
       "iso": "SY"
     },
     {
       "country_name": "Tajikistan",
       "year": 2012,
       "value": 21.54,
       "iso": "TJ"
     },
     {
       "country_name": "Thailand",
       "year": 2012,
       "value": 36.42,
       "iso": "TH"
     },
     {
       "country_name": "The former Yugoslav Republic of Macedonia",
       "year": 2012,
       "value": 36.79,
       "iso": "MK"
     },
     {
       "country_name": "Timor-Leste",
       "year": 2012,
       "value": 16.4,
       "iso": "TL"
     },
     {
       "country_name": "Togo",
       "year": 2012,
       "value": 18.82,
       "iso": "TG"
     },
     {
       "country_name": "Tonga",
       "year": 2012,
       "value": 21.28,
       "iso": "TO"
     },
     {
       "country_name": "Trinidad and Tobago",
       "year": 2012,
       "value": 32.84,
       "iso": "TT"
     },
     {
       "country_name": "Tunisia",
       "year": 2012,
       "value": 29.89,
       "iso": "TN"
     },
     {
       "country_name": "Turkey",
       "year": 2012,
       "value": 29.04,
       "iso": "TR"
     },
     {
       "country_name": "Turkmenistan",
       "year": 2012,
       "value": 25.26,
       "iso": "TM"
     },
     {
       "country_name": "Uganda",
       "year": 2012,
       "value": 15.68,
       "iso": "UG"
     },
     {
       "country_name": "Ukraine",
       "year": 2012,
       "value": 39.62,
       "iso": "UA"
     },
     {
       "country_name": "United Arab Emirates",
       "year": 2012,
       "value": 29.37,
       "iso": "AE"
     },
     {
       "country_name": "United Kingdom",
       "year": 2012,
       "value": 40.07,
       "iso": "GB"
     },
     {
       "country_name": "United Republic of Tanzania",
       "year": 2012,
       "value": 17.49,
       "iso": "TZ"
     },
     {
       "country_name": "United States of America",
       "year": 2012,
       "value": 37.3,
       "iso": "US"
     },
     {
       "country_name": "Uruguay",
       "year": 2012,
       "value": 34.16,
       "iso": "UY"
     },
     {
       "country_name": "Uzbekistan",
       "year": 2012,
       "value": 24.88,
       "iso": "UZ"
     },
     {
       "country_name": "Vanuatu",
       "year": 2012,
       "value": 21.56,
       "iso": "VU"
     },
     {
       "country_name": "Venezuela (Bolivarian Republic of)",
       "year": 2012,
       "value": 26.73,
       "iso": "VE"
     },
     {
       "country_name": "Viet Nam",
       "year": 2012,
       "value": 29.41,
       "iso": "VN"
     },
     {
       "country_name": "Yemen",
       "year": 2012,
       "value": 18.78,
       "iso": "YE"
     },
     {
       "country_name": "Zambia",
       "year": 2012,
       "value": 16.54,
       "iso": "ZM"
     },
     {
       "country_name": "Zimbabwe",
       "year": 2012,
       "value": 19.18,
       "iso": "ZW"
     }
    ]
  };

  constructor() { }

  //Returns an IsoValue Type Array
  getValuesWithIso() {
    return this.mockData;
  }

  //Returns Tile of Data
  getTitle() {
    return this.mockData.title;
  }

}
