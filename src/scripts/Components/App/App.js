import {Component} from "../../framework/";
import {Header} from "../Header/";
import {CurrentWeather} from "../CurrentWeather/";
import {WeatherForecast} from "../WeatherForecast";
import {Footer} from "../Footer";

class App extends Component{
    constructor(host) {
        super(host);
        this.state = {};
    }


    // async controlSearch(value=true) {
    //     if(value){
    //         this.state.search = new SearchService();// передать query
    //         await this.state.search.getResults();
    //         console.log(this.state.search.result);
    //     }
    // };

    render() {
        return [
            {
                tag: Header,
                props: {},
                children: [
                    {
                        tag: 'div',
                        content: '123456789',
                        classList: ['experimental'],
                    }
                ]
            },
            {
                tag: CurrentWeather,
                props: {}
            },
            {
                tag: WeatherForecast,
                props: {}
            },
            {
                tag: Footer,
                props: {}
            },
        ];
    }
}

export default App;