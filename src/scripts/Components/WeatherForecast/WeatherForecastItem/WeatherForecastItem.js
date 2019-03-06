import {Component} from "../../../framework/";


class WeatherForecastItem extends Component{
    constructor(host) {
        super(host);
    }
    render() {
        return [
            {
                tag: 'div',
                classList: ['col-2'],
                children: [
                    {
                        tag: 'div',
                        classList: ['week__forecast'],
                        attributes: {name: 'id', value: '01'},
                        children: [
                            {
                                tag: 'div',
                                classList: ['week__forecast_day'],
                                content: 'Sun'
                            },
                            {
                                tag: 'div',
                                classList: ['week__forecast_img'],
                                content: '<i class="fas fa-cloud-sun-rain"></i>'
                            },
                            {
                                tag: 'div',
                                classList: ['week__forecast_temperature'],
                                content: '23°'
                            },
                        ]
                    },
                ]
            },
        ];
    }
}

export default WeatherForecastItem;