import {Component} from "../../framework/";
import {WeatherForecastItem} from "./WeatherForecastItem";

class WeatherForecast extends Component {
    constructor(host, props) {
        super(host, props);
    }

    componentWillMount() {
        this.weatherForecast = this.weatherForecast.bind(this);
    }

    weatherForecast(weatherForecast){
        this.updateState(weatherForecast);
    }

    render() {
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
                                children: (this.props.list)
                                    ? this.props.list
                                        // .filter((item, i) => item.dt_txt.split(' ')[1] === '12:00:00')
                                        .filter((item, i) => i%7 === 0)
                                        .map(item => {
                                        return {
                                            tag: WeatherForecastItem,
                                            props: {...item, unit: this.props.unit}
                                        };
                                    })
                                    : '',
                            },
                        ]
                    },
                ]
            },
        ];
    }
}


export default WeatherForecast;
