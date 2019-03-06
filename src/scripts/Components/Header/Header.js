import {Component} from "../../framework/";
import {SearchBar} from "./SearchBar/";
import {UnitSelect} from "./UnitSelect/";
import {FavoritesButton} from "./FavoritesButton/";

class Header extends Component{
    constructor(host) {
        super(host);
    }
    render() {
        return [
            {
                tag: 'header',
                content: '',
                children: [
                    {
                        tag: 'div',
                        content: '',
                        classList: ['container'],
                        children: [
                            {
                                tag: 'div',
                                classList: ['row', 'search'],
                                children: [
                                    {tag: 'div', classList: ['col-12'], content: '<h1>Weather App</h1>'},
                                    {
                                        tag: 'div',
                                        classList: ['col-8'],
                                        children: [
                                            {
                                                tag: SearchBar,
                                                props: {}
                                            }
                                        ]
                                    },
                                    {
                                        tag: 'div',
                                        classList: ['col-2'],
                                        children: [
                                            {
                                                tag: UnitSelect,
                                                props: {}
                                            }
                                        ]
                                    },
                                    {
                                        tag: 'div',
                                        classList: ['col-2'],
                                        children: [
                                            {
                                                tag: FavoritesButton,
                                                props: {}
                                            }
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

export default Header;