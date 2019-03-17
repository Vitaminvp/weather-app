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
        this.state = {
            currentWeather: {},
            likes: [],
            isLiked: false,
            history: [],
            unit: 'CE'
        };
    }

    bindBeforeRender(){
        this.onServerResponse = this.onServerResponse.bind(this);
        this.updateState = this.updateState.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleDeleteAllLikes = this.handleDeleteAllLikes.bind(this);
        this.handleDeleteAllHistory = this.handleDeleteAllHistory.bind(this);
        this.onCityLike = this.onCityLike.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleDeleteHistoryItem = this.handleDeleteHistoryItem.bind(this);
        this.handleDeleteFavoriteItem = this.handleDeleteFavoriteItem.bind(this);
        this.isLiked = this.isLiked.bind(this);
        this.isInHistory = this.isInHistory.bind(this);
        this.handleUnitChange = this.handleUnitChange.bind(this);
        WeatherDataService.subscribeForWeatherForecast(this.onServerResponse);
        WeatherDataService.subscribeForCurrentWeather(this.onServerResponse);
    }

    updateState(nextState) {
        this.state = Object.assign({}, this.state, nextState);
        this.state.isLiked = this.isLiked();

        if(!this.state.history.length||this.state.history[this.state.history.length - 1].id !== this.state.currentWeather.id){
            const dataId = Math.random().toString(36).substr(2, 9);
            this.state.history.push({
                id: this.state.currentWeather ? this.state.currentWeather.id : '',
                dataId,
                name: `${this.state.currentWeather.name}, ${this.state.currentWeather.sys.country}`
            });
        }


        console.log("state", this.state);

        this._render();
    }

    onServerResponse(weatherData) {
        this.updateState(weatherData);
    }

    onFormSubmit(query=''){
        WeatherDataService.subscribeForCurrentWeather(this.onServerResponse, query);
        WeatherDataService.subscribeForWeatherForecast(this.onServerResponse, query);
    }

    handleDeleteFavoriteItem(e){
        this.state.likes = this.state.likes.filter(item => item.id !== +e.target.dataset.id);
        this.state.isLiked = this.isLiked();
        this._render();
    }

    handleDeleteAllLikes(){
        this.state.likes = [];
        this.state.isLiked = false;
        this._render();
    }

    isLiked(){
        return this.state.likes.some(item => this.state.currentWeather.id === item.id);
    }

    handleItemClick(e){
        this.onFormSubmit(e.target.textContent.split(', '));
    }


    handleDeleteHistoryItem(e){
        this.state.history = this.state.history.filter(item => item.dataId !== e.target.dataset.dataid);
        this._render();
    }

    handleDeleteAllHistory(){
        this.state.history = [];
        this._render();
    }

    isInHistory(){
        return this.state.history.some(item => this.state.currentWeather.id === item.id);
        this._render();
    }

    onCityLike(){
        if(this.isLiked()){
            this.state.likes = this.state.likes.filter(item => item.id !== this.state.currentWeather.id);
            this.state.isLiked = false;
        }else{
            this.state.likes.push({
                id: this.state.currentWeather.id,
                name: `${this.state.currentWeather.name}, ${this.state.currentWeather.sys.country}`
            });
            this.state.isLiked = true;
        }
        this._render();
    }
    handleUnitChange(e){
        if(e.target.value) this.state.unit = e.target.value;
        this._render();
    }
    render() {
        const { currentWeather } = this.state;
        console.log("currentWeather", currentWeather);
        return [
            {
                tag: Header,
                props: {
                    onFormSubmit: this.onFormSubmit,
                    onCityLike: this.onCityLike,
                    isLiked: this.state.isLiked,
                    unit: this.state.unit,
                    handleUnitChange: this.handleUnitChange,
                },
            },
            {
                tag: CurrentWeather,
                props: { ...this.state.currentWeather, unit: this.state.unit }
            },
            {
                tag: WeatherForecast,
                props: {...this.state.weatherForecast, unit: this.state.unit}
            },
            {
                tag: Footer,
                props: {
                    likes: this.state.likes,
                    unit: this.state.unit,
                    history: this.state.history,
                    handleDeleteAllLikes: this.handleDeleteAllLikes,
                    handleDeleteAllHistory: this.handleDeleteAllHistory,
                    onHistoryItemRemove: this.onHistoryItemRemove,
                    handleItemClick: this.handleItemClick,
                    handleDeleteHistoryItem: this.handleDeleteHistoryItem,
                    handleDeleteFavoriteItem: this.handleDeleteFavoriteItem
                }
            },
        ];
    }
}

export default App;