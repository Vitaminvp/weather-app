import axios from 'axios';

import { URL1, URL5, KEY } from './constants';

class WeatherDataService{

    getCurrentWeather(query = 'Kiev'){
        const url = `${URL1}${query}&appid=${KEY}`;
        return this.getData(url);
    }

    getWeatherForecast(query = 'London') {
        const url = `${URL5}${query}&appid=${KEY}`;
        return this.getData(url);
    }

    async getData(url){
        try {
            const res = await axios(url);
            return res.data;
        } catch (error) {
            console.warn(error);
        }
    }
}

export default new WeatherDataService();