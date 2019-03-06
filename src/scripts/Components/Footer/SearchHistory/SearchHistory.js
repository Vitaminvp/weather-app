import {Component} from "../../../framework/";


class SearchHistory extends Component{
    constructor(host) {
        super(host);
    }
    render() {
        return [
            {
                tag: 'div',
                classList: ['recent'],
                children: [
                    {
                        tag: 'div',
                        classList: ['recent__header'],
                        children: [
                            {
                                tag: 'h4',
                                classList: ['recent__title'],
                                content: '<i class="fas fa-history"></i> Recently viewed'
                            },
                            {
                                tag: 'button',
                                classList: ['recent__delete'],
                                content: '<i class="far fa-trash-alt"></i>'
                            },
                        ]
                    },
                    {
                        tag: 'ul',
                        classList: ['recent__list'],
                        children: [
                            {
                                tag: 'li',
                                attributes: {name: 'id', value: '21'},
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
                                attributes: {name: 'id', value: '22'},
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

export default SearchHistory;