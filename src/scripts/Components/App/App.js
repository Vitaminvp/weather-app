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
        this.onFormSubmit = this.onFormSubmit.bind(this);
        WeatherDataService.subscribeForWeatherForecast(this.onServerResponse);
        WeatherDataService.subscribeForCurrentWeather(this.onServerResponse);
    }

    updateState(nextState) {
        this.state = Object.assign({}, this.state, nextState);
        //this.state = {...this.state, ...nextState};
        this._render();
    }

    onServerResponse(weatherData) {
        this.updateState(weatherData);
        // ensure weatherData is properly rendered
    }
    onFormSubmit(query=''){
        console.log("submit", query);
        WeatherDataService.subscribeForCurrentWeather(this.onServerResponse, query);
        WeatherDataService.subscribeForWeatherForecast(this.onServerResponse, query);
    }
    render() {
        return [
            {
                tag: Header,
                props: { onFormSubmit: this.onFormSubmit },
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