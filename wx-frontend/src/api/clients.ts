import axios from 'axios';

export const apiData = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiGeo = axios.create({
  baseURL: 'http://api.openweathermap.org/geo/1.0',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiIcon = axios.create({
  baseURL: 'https://openweathermap.org/img',
  headers: {
    'Content-Type': 'application/json',
  },
});
