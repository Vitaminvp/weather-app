import {Component} from "../../framework/";
import {WeatherForecastItem} from "./WeatherForecastItem";

class WeatherForecast extends Component {
    constructor(host, props) {
        super(host, props);
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
                                        .filter((item, i) => i%7 === 0)
                                        .map(item => {
                                        return {
                                            tag: WeatherForecastItem,
                                            props: {item}
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