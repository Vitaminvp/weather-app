import "babel-polyfill";
import { Component } from "../../../framework";
import { CITIES } from '../../../../data/city.min';
import { initAutocomplete } from "../../../../Services/constants";

class SearchBar extends Component{
    constructor(host, props) {
        super(host, props);
        this.props = props;
    }

    componentWillMount(){
        ['handleChange', 'handleSubmit', 'handleListClick', 'handleAutocomplet']
            .forEach(name => this[name] = this[name].bind(this));
    }

    componentDidMount(){
        //setTimeout(()=> {
            //const input = document.querySelector(".search__input");
            //console.log("input", input);
            //this.Autocomplite(input, this.handleAutocomplet)
        //}, 200);
    }

    handleAutocomplet(e){
        //console.log("e", e);
    }

    handleChange(e){
        const ul = e.target.closest('.search__form').querySelector('.search__list');
        let list = '';
        const findMatches = (value, cities) => {
            return cities.filter(city => {
                const regex = new RegExp(value, 'gi');
                return city.name.match(regex);
            });
        };
        const renderMatches = (value, cities) => {
            const matchArray = findMatches(value, cities);
            list = matchArray.map(item => {
                return `<li class="search__list_item">
                            ${item.name}, ${item.country}
                        </li>`;
            }).join('');

            if(e.target.value.length > 0){
                ul.innerHTML = list;
            } else{
                ul.innerHTML = '';
            }
        };

        if(e.target.value.length > 2){
            renderMatches(e.target.value, CITIES);
        } else{
            ul.innerHTML = '';
        }
    };

    handleSubmit(e){
        e.preventDefault();
        const query = e.target.querySelector('.search__input').value.split(', ');
        this.props.onFormSubmit(query);
    };

    handleListClick(e){
        if(e.target.classList.contains('search__list_item')){
            const input = e.target.closest('.search__form').querySelector('.search__input');
            const query = e.target.innerHTML.trim();
            input.value = query;
            input.focus();
            this.props.onFormSubmit(query.split(', '));
            e.target.parentNode.innerHTML = '';
        }
    }

    Autocomplite() {
        const input = document.querySelector(".search__input");
        // console.log(input);
        initAutocomplete(input);
    }
    render(){
       return [
           {
               tag: 'form',
               classList: ['search__form'],
               attributes: [ {name: 'action', value: ''} ],
               eventHandler: [
                   {
                       eventType: 'submit',
                       handler: this.handleSubmit,
                   }
               ],
               children: [
                   {
                       tag: 'label',
                       classList: 'search__input_label',
                       children: [
                           {
                               tag: 'input',
                               classList: ['search__input'],
                               attributes: [
                                   {name: 'type', value: 'text'},
                                   {name: 'placeholder', value: 'Type location...'},
                                   {name: 'required', value: ''},
                                   {name: 'autofocus', value: ''},
                                   {name: 'autocomplete', value: 'off'},
                               ],
                               eventHandler: [
                                   {
                                       eventType: 'input',
                                       handler: this.handleChange,
                                   }
                               ]
                           }
                       ]
                   },
                   {
                       tag: 'ul',
                       classList: 'search__list',
                       eventHandler: [
                           {
                               eventType: 'click',
                               handler: this.handleListClick,
                           }
                       ]
                   }
               ]
           }
       ];
    }
}

export default SearchBar;