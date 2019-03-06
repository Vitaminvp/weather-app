import {Component} from "../../framework/";
import {FavouriteLocations} from "./FavouriteLocations";
import {SearchHistory} from "./SearchHistory";


class Footer extends Component{
    constructor(host) {
        super(host);
    }
    render() {
        return [
            {
                tag: 'footer',
                content: '',
                children: [
                    {
                        tag: 'div',
                        content: '',
                        classList: ['container'],
                        children: [
                            {
                                tag: 'div',
                                classList: ['row'],
                                children: [
                                    {
                                        tag: 'div',
                                        classList: ['col-6'],
                                        children: [
                                            {
                                                tag: FavouriteLocations,
                                                props: {}
                                            },
                                        ]
                                    },
                                    {
                                        tag: 'div',
                                        classList: ['col-6'],
                                        children: [
                                            {
                                                tag: SearchHistory,
                                                props: {}
                                            },
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

export default Footer;