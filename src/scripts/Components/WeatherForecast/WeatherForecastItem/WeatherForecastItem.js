import {Component} from "../../../framework/";


class WeatherForecastItem extends Component{
    constructor(host, props) {
        super(host, props);
    }
    render() {
        const item = this.props.item;
        const day = new Date(item.dt_txt).getDay();
        const days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
        return [
            {
                tag: 'div',
                classList: ['col-2'],
                children: [
                    {
                        tag: 'div',
                        classList: ['week__forecast'],
                        attributes: {name: 'id', value: this.props.item.dt},
                        children: [
                            {
                                tag: 'div',
                                classList: ['week__forecast_day'],
                                content: `${days[day]}`
                            },
                            {
                                tag: 'div',
                                classList: ['week__forecast_img'],
                                content: `<img  src="http://openweathermap.org/img/w/${item.weather[0].icon}.png" alt="${item.weather[0].description}" title="${item.weather[0].description}" >`//'<i class="fas fa-cloud-sun-rain"></i>'
                            },
                            {
                                tag: 'div',
                                classList: ['week__forecast_temperature'],
                                content: `${this.props.item.main.temp.toFixed(1)}°`
                            },
                        ]
                    },
                ]
            },
        ];
    }
}

export default WeatherForecastItem;