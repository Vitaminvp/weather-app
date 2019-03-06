import {Component} from "../../framework/";
import WeatherDataService from "../../../Services/WeatherDataService.js";

class CurrentWeather extends Component{
    constructor(host) {
        super(host);
    }
    render() {
        const data = WeatherDataService.getCurrentWeather();
        data.then(data => console.log("CurrentWeather", data));
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
                                classList: ['row'],
                                children: [
                                    {
                                        tag: 'div', classList: ['col-12'],
                                        children: [
                                            {
                                                tag: 'div',
                                                classList: ['forecast'],
                                                children: [
                                                    {tag: 'h2', classList: ['forecast__city'], content: 'Kiev, UA',},
                                                    {
                                                        tag: 'div',
                                                        classList: ['container'],
                                                        children: [
                                                            {
                                                                tag: 'div',
                                                                classList: ['row'],
                                                                children: [
                                                                    {
                                                                        tag: 'div',
                                                                        classList: ['col-4'],
                                                                        children: [
                                                                            {
                                                                                tag: 'div',
                                                                                classList: ['forecast__day'],
                                                                                content: 'Tuesday'
                                                                            },
                                                                            {
                                                                                tag: 'time',
                                                                                classList: ['forecast__date'],
                                                                                content: '2019-02-26'
                                                                            },
                                                                            {
                                                                                tag: 'div',
                                                                                classList: ['forecast__wind'],
                                                                                content: 'Wind 4.42121 m/s'
                                                                            },
                                                                            {
                                                                                tag: 'div',
                                                                                classList: ['forecast__humidity'],
                                                                                content: '86%'
                                                                            },
                                                                            {
                                                                                tag: 'div',
                                                                                classList: ['forecast__pressure'],
                                                                                content: '1017.58 hPa'
                                                                            },
                                                                        ],
                                                                    },
                                                                    {
                                                                        tag: 'div',
                                                                        classList: ['col-4'],
                                                                        children: [
                                                                            {
                                                                                tag: 'div',
                                                                                classList: ['forecast__img'],
                                                                                content: '<i class="fas fa-sun"></i>'
                                                                            },
                                                                            {
                                                                                tag: 'div',
                                                                                classList: ['forecast__weather'],
                                                                                content: '<i class="fas fa-cloud"></i> Overcast clouds'
                                                                            },
                                                                        ],
                                                                    },
                                                                    {
                                                                        tag: 'div',
                                                                        classList: ['col-4'],
                                                                        children: [
                                                                            {
                                                                                tag: 'div',
                                                                                classList: ['forecast__temperature'],
                                                                                children: [
                                                                                    {
                                                                                        tag: 'div',
                                                                                        classList: ['forecast__temperature_min'],
                                                                                        content: '<i class="fas fa-temperature-low"></i> 0°'
                                                                                    },
                                                                                    {
                                                                                        tag: 'div',
                                                                                        classList: ['forecast__temperature_max'],
                                                                                        content: '<i class="fas fa-temperature-high"></i> 1°'
                                                                                    },
                                                                                ]
                                                                            },
                                                                            {
                                                                                tag: 'div',
                                                                                classList: ['forecast__temperature_current'],
                                                                                content: '1°'
                                                                            },
                                                                        ],
                                                                    }
                                                                ],
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                        ]
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

export default CurrentWeather;