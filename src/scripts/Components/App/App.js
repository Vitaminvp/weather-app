import {Component} from "../../framework/";
import {Header} from "../Header/";
import {CurrentWeather} from "../CurrentWeather/";
import {WeatherForecast} from "../WeatherForecast";
import {Footer} from "../Footer";
import WeatherDataService from "../../../Services/WeatherDataService";

class App extends Component{
    constructor(host, props) {
        super(host, props);
        this.props = props;
        this.bindBeforeRender();
        this.state = {};
    }

    bindBeforeRender(){
        this.onServerResponse = this.onServerResponse.bind(this);
        this.updateState = this.updateState.bind(this);
        WeatherDataService.subscribeForWeatherForecast(this.onServerResponse);
        WeatherDataService.subscribeForCurrentWeather(this.onServerResponse);
    }

    updateState(nextState) {
        this.state = Object.assign({}, this.state, nextState);
        this._render();
        console.log("this.state", this.state);
    }

    onServerResponse(weatherData) {
        this.updateState(weatherData);
        // ensure weatherData is properly rendered
    }

    render() {
        return [
            {
                tag: Header,
                props: {},
            },
            {
                tag: CurrentWeather,
                props: this.state.currentWeather
            },
            {
                tag: WeatherForecast,
                props: this.state.weatherForecast
            },
            {
                tag: Footer,
                props: {}
            },
        ];
    }
}

export default App;