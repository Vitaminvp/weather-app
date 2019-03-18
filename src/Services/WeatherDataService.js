// import axios from 'axios';

import { URL1, URL5, KEY } from './constants';

class WeatherDataService{
    constructor(){
    }

    subscribeForWeather(callback, query){
        Promise.all([this.getCurrentWeather(query), this.getWeatherForecast(query)])
            .then(weather => callback({currentWeather: weather[0], weatherForecast: weather[1]}));
    }

    getCurrentWeather(query = ['Kiev', 'UA'], units = 'metric'){
        const city = query[0];
        const code = query[1];
        const url = `${URL1}${city}${code?`,${code}`:''}&appid=${KEY}&units=${units}`;
        return this._getData(url);
    }

    getWeatherForecast(query = ['Kiev', 'UA'], units = 'metric') {
        const city = query[0];
        const code = query[1];
        const url = `${URL5}${city}${code?`,${code}`:''}&appid=${KEY}&units=${units}`;
        return this._getData(url);
    }

    _getData(url) {
        return fetch(url)
            .then(response => {
                if (response.ok){
                    return response.json();
                } else {
                    return Promise.reject(response.status)
                }
            });
    }

    // subscribeForCurrentWeather(callback, query){
    //     this.getCurrentWeather(query)
    //         .then(currentWeather => callback({currentWeather}));
    // }
    // subscribeForWeatherForecast(callback, query){
    //     this.getWeatherForecast(query)
    //         .then(weatherForecast => callback({weatherForecast}));
    // }
    // async _getData(url){
    //     try {
    //         const res = await axios(url);
    //         return res.data;
    //     } catch (error) {
    //         console.warn(error);
    //     }
    // }

}

export default new WeatherDataService();