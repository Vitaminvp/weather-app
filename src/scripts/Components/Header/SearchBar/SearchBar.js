import "babel-polyfill";

import { Component } from "../../../framework";
import { CITIES } from '../../../../data/city.min';

class SearchBar extends Component{
    constructor(host, props){
        super(host, props);
        this.handleChange    = this.handleChange.bind(this);
        this.handleSubmit    = this.handleSubmit.bind(this);
        this.handleListClick = this.handleListClick.bind(this);
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
    };
    handleListClick(e){
        if(e.target.classList.contains('search__list_item')){
            const input = e.target.closest('.search__form').querySelector('.search__input');
            input.value = e.target.innerHTML.trim();
            input.focus();
            e.target.parentNode.innerHTML = '';
        }
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