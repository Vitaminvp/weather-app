import axios from 'axios';

import { URL1, URL5, KEY } from './constants';

class WeatherDataService{
    constructor(){
        //this.subscribeForCurrentWeather = this.subscribeForCurrentWeather.bind(this);
    }

    subscribeForCurrentWeather(callback){
        this.getCurrentWeather()
            .then(currentWeather => callback({currentWeather}));
    }
    subscribeForWeatherForecast(callback){
        this.getWeatherForecast()
            .then(weatherForecast => callback({weatherForecast}));
    }
    getCurrentWeather(query = 'Kiev'){
        const url = `${URL1}${query}&appid=${KEY}&units=metric`;
        return this._getData(url);
    }

    getWeatherForecast(query = 'London') {
        const url = `${URL5}${query}&appid=${KEY}&units=metric`;
        return this._getData(url);
    }

    async _getData(url){
        try {
            const res = await axios(url);
            return res.data;
        } catch (error) {
            console.warn(error);
        }
    }
}

export default new WeatherDataService();