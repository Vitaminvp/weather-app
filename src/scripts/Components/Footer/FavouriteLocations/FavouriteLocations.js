import {Component} from "../../../framework/";


class FavouriteLocations extends Component{
    constructor(host) {
        super(host);
    }
    render() {
        return [
            {
                tag: 'div',
                classList: ['favorite'],
                children: [
                    {
                        tag: 'div',
                        classList: ['favorite__header'],
                        children: [
                            {
                                tag: 'h4',
                                classList: ['favorite__title'],
                                content: '<i class="fas fa-star"></i> Favorite'
                            },
                            {
                                tag: 'button',
                                classList: ['favorite__delete'],
                                content: '<i class="far fa-trash-alt"></i>'
                            },
                        ]
                    },
                    {
                        tag: 'ul',
                        classList: ['favorite__list'],
                        children: [
                            {
                                tag: 'li',
                                attributes: {name: 'id', value: '11'},
                                children: [
                                    {tag: 'span', content: 'Kyiv, Ukraine, 02000'},
                                    {
                                        tag: 'button',
                                        classList: ['favorite__list_delete'],
                                        attributes: [{name: 'type', value: 'button'}],
                                        content: '<i class="fas fa-times"></i>'}
                                ]
                            },
                            {
                                tag: 'li',
                                attributes: {name: 'id', value: '12'},
                                children: [
                                    {tag: 'span', content: 'Kyiv, Ukraine, 02000'},
                                    {
                                        tag: 'button',
                                        classList: ['favorite__list_delete'],
                                        attributes: [{name: 'type', value: 'button'}],
                                        content: '<i class="fas fa-times"></i>'}
                                ]
                            },
                        ]
                    },
                ]
            },
        ];
    }
}

export default FavouriteLocations;