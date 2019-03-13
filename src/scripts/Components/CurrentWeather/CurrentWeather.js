import {Component} from "../../framework/";

class CurrentWeather extends Component{
    constructor(host, props) {
        super(host, props);
    }

    render() {
        const dateMs = this.props.dt;
        const convertData = stringData => {
            const date = new Date(stringData);
            console.log("date", date);
            return new Intl.DateTimeFormat('en-GB').format(date);
        };
        const day = new Date(dateMs).getDay();
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
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
                                                    {tag: 'h2', classList: ['forecast__city'], content: `${this.props.name}, ${this.props.sys?this.props['sys'].country:''}`},
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
                                                                                content: `${day?days[day]:''}`
                                                                            },
                                                                            {
                                                                                tag: 'time',
                                                                                classList: ['forecast__date'],
                                                                                content: `${dateMs?convertData(dateMs):''}`
                                                                            },
                                                                            {
                                                                                tag: 'div',
                                                                                classList: ['forecast__wind'],
                                                                                content: `Wind ${this.props.wind?this.props.wind.speed:''} m/s`
                                                                            },
                                                                            {
                                                                                tag: 'div',
                                                                                classList: ['forecast__humidity'],
                                                                                content: `${this.props.main?this.props.main.humidity:''} %`
                                                                            },
                                                                            {
                                                                                tag: 'div',
                                                                                classList: ['forecast__pressure'],
                                                                                content: `${this.props.main?this.props.main.pressure:''} hPa`
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
                                                                                content: `<img  src='http://openweathermap.org/img/w/${this.props.weather?this.props.weather[0].icon:'01d'}.png' alt='${this.props.weather?this.props.weather[0].description:''}' title='${this.props.weather?this.props.weather[0].description:''}' >`
                                                                            },
                                                                            {
                                                                                tag: 'div',
                                                                                classList: ['forecast__weather'],
                                                                                content: this.props.weather?this.props.weather[0].description:''
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
                                                                                        content: `<i class="fas fa-temperature-low"></i> ${this.props.main?this.props.main.temp_min:''}°`
                                                                                    },
                                                                                    {
                                                                                        tag: 'div',
                                                                                        classList: ['forecast__temperature_max'],
                                                                                        content: `<i class="fas fa-temperature-high"></i> ${this.props.main?this.props.main.temp_max:''}°`
                                                                                    },
                                                                                ]
                                                                            },
                                                                            {
                                                                                tag: 'div',
                                                                                classList: ['forecast__temperature_current'],
                                                                                content: `${this.props.main?this.props.main.temp.toFixed(1):''}°`                                                                          },
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