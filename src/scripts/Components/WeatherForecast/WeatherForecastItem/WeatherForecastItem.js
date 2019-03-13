import {Component} from "../../../framework/";
import {convertToDay} from "../../../../Services/constants";

class WeatherForecastItem extends Component{
    constructor(host, props) {
        super(host, props);
    }
    render() {
        const {dt, main, weather} = this.props.item;
        return [
            {
                tag: 'div',
                classList: ['col-2'],
                children: [
                    {
                        tag: 'div',
                        classList: ['week__forecast'],
                        attributes: {name: 'id', value: dt},
                        children: [
                            {
                                tag: 'div',
                                classList: ['week__forecast_day'],
                                content: `${convertToDay(dt)}`
                            },
                            {
                                tag: 'div',
                                classList: ['week__forecast_img'],
                                content: `<img  src="http://openweathermap.org/img/w/${weather[0].icon}.png" alt="${weather[0].description}" title="${weather[0].description}" >`//'<i class="fas fa-cloud-sun-rain"></i>'
                            },
                            {
                                tag: 'div',
                                classList: ['week__forecast_temperature'],
                                content: `${main.temp.toFixed(1)}°`
                            },
                        ]
                    },
                ]
            },
        ];
    }
}

export default WeatherForecastItem;