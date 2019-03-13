import axios from 'axios';

import { URL1, URL5, KEY } from './constants';

class WeatherDataService{
    constructor(){
        //this.subscribeForCurrentWeather = this.subscribeForCurrentWeather.bind(this);
    }

    subscribeForCurrentWeather(callback, query){
        this.getCurrentWeather(query)
            .then(currentWeather => callback({currentWeather}));
    }
    subscribeForWeatherForecast(callback, query){
        this.getWeatherForecast(query)
            .then(weatherForecast => callback({weatherForecast}));
    }
    getCurrentWeather(query = ['Kiev', 'UA']){
        const city = query[0];
        const code = query[1];
        const url = `${URL1}${city},${code?code:''}&appid=${KEY}&units=metric`;
        return this._getData(url);
    }

    getWeatherForecast(query = ['Kiev', 'UA']) {
        const city = query[0];
        const code = query[1];
        const url = `${URL5}${city},${code?code:''}&appid=${KEY}&units=metric`;
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