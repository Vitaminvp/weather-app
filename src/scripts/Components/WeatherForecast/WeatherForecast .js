import {Component} from "../../framework/";
import {WeatherForecastItem} from "./WeatherForecastItem";
import WeatherDataService from "../../../Services/WeatherDataService.js";


class WeatherForecast extends Component{
    constructor(host) {
        super(host);
    }
    render() {
        const data = WeatherDataService.getWeatherForecast();
        data.then(data => console.log("WeatherForecast", data));
        return [
            {
                tag: 'section',
                content: '',
                children: [
                    {
                        tag: 'div',
                        content: '',
                        classList: ['container'],
                        children: [
                            {
                                tag: 'div',
                                classList: ['row', 'renderItems'],
                                children: [
                                    {
                                        tag: WeatherForecastItem,
                                        props: {}
                                    },
                                ],
                            },
                        ]
                    },
                ]
            },
        ];
    }
}

export default WeatherForecast;