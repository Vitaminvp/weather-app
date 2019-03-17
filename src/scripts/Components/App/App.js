import {Component} from "../../framework/";
import {Header} from "../Header/";
import {CurrentWeather} from "../CurrentWeather/";
import {WeatherForecast} from "../WeatherForecast";
import {Footer} from "../Footer";
import WeatherDataService from "../../../Services/WeatherDataService";

class App extends Component {
    constructor(host, props) {
        super(host, props);
        this.props = props;
        this.componentWillMount();

    }

    componentWillMount() {
        ['onServerResponse', 'updateState', 'onFormSubmit', 'handleDeleteAllLikes', 'handleDeleteAllHistory', 'onCityLike', 'handleItemClick', 'handleDeleteHistoryItem', 'handleDeleteFavoriteItem', 'isLiked', 'isInHistory', 'handleUnitChange']
            .forEach(name => this[name] = this[name].bind(this));

        WeatherDataService.subscribeForWeatherForecast(this.onServerResponse);
        WeatherDataService.subscribeForCurrentWeather(this.onServerResponse);

        this.state = {
            currentWeather: {},
            likes: [],
            isLiked: false,
            history: [],
            unit: 'CE'
        };
    }

    updateState(nextState) {
        this.state = Object.assign({}, this.state, nextState);
        this._render();
    }

    onServerResponse(weatherData) {
        if (!this.state.history.length || this.state.history[this.state.history.length - 1].id !== this.state.currentWeather.id) {
            const dataId = Math.random().toString(36).substr(2, 9);
            this.updateState({
                ...weatherData,
                history: [
                    ...this.state.history,
                    {
                        id: this.state.currentWeather ? this.state.currentWeather.id : '',
                        dataId,
                        name: `${this.state.currentWeather?this.state.currentWeather.name:''}, ${this.state.currentWeather.sys?this.state.currentWeather.sys.country : ''}`
                    }
                ],
                isLiked: this.isLiked()
            });
        } else {
            this.updateState({...weatherData, isLiked: this.isLiked()});
        }


    }

    onFormSubmit(query = '') {
        WeatherDataService.subscribeForCurrentWeather(this.onServerResponse, query);
        WeatherDataService.subscribeForWeatherForecast(this.onServerResponse, query);
    }

    handleDeleteFavoriteItem(e) {
        if(this.state.currentWeather.id === +e.target.dataset.id){
            this.updateState({
                isLiked: false,
                likes: this.state.likes.filter(item => item.id !== +e.target.dataset.id)
            });
        }else{
            this.updateState({
                likes: this.state.likes.filter(item => item.id !== +e.target.dataset.id),
                isLiked: this.isLiked()
            });
        }

        console.log("this.isLiked()", this.isLiked());
    }

    handleDeleteAllLikes() {
        this.updateState({
            likes: [],
            isLiked: false
        });
    }

    isLiked() {
        return this.state.likes.some(item => this.state.currentWeather.id === item.id);
    }

    handleItemClick(e) {
        this.onFormSubmit(e.target.textContent.split(', '));
    }


    handleDeleteHistoryItem(e) {
        this.updateState({
            history: this.state.history.filter(item => item.dataId !== e.target.dataset.dataid)
        });
    }

    handleDeleteAllHistory() {
        this.updateState({
            history: []
        });
    }

    isInHistory() {
        return this.state.history.some(item => this.state.currentWeather.id === item.id);
    }

    onCityLike() {
        if (this.isLiked()) {
            this.updateState({
                likes: this.state.likes.filter(item => item.id !== this.state.currentWeather.id),
                isLiked: false
            });
        } else {
            this.updateState({
                isLiked: true,
                likes: [
                    ...this.state.likes,
                    {
                        id: this.state.currentWeather.id,
                        name: `${this.state.currentWeather.name}, ${this.state.currentWeather.sys.country}`
                    }
                ]
            });
        }
    }

    handleUnitChange(e) {
        if (e.target.value)
            this.updateState({unit: e.target.value});
    }

    render() {
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
                props: {...this.state.currentWeather, unit: this.state.unit}
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