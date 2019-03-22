import {Component} from "../../../framework/";


class SearchHistory extends Component{
    constructor(host, props) {
        super(host, props);
        this.props = props;
    }

    componentWillMount() {
        ['handleDeleteHistoryItem', 'handleDeleteAllHistory', 'handleItemClick']
            .forEach(name => this[name] = this[name].bind(this));
    }

    handleDeleteAllHistory() {
        this.props.handleDeleteAllHistory();
    }

    handleItemClick(e){
        this.props.handleItemClick(e)
    }

    handleDeleteHistoryItem(e){
        this.props.handleDeleteHistoryItem(e)
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
                                content: '<i class="far fa-trash-alt"></i>',
                                eventHandler: [
                                    {
                                        eventType: 'click',
                                        handler: this.handleDeleteAllHistory,
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        tag: 'ul',
                        classList: ['recent__list'],
                        children: this.props.history ?
                            this.props.history.map(item => {
                                return ({
                                    tag: 'li',
                                    children: [
                                        {
                                            tag: 'span',
                                            classList: ['favorite__list_name'],
                                            content: item.name,
                                            eventHandler: [
                                                {
                                                    eventType: 'click',
                                                    handler: this.handleItemClick,
                                                }
                                            ]
                                        },
                                        {
                                            tag: 'button',
                                            classList: ['favorite__list_delete'],
                                            attributes: [
                                                {name: 'type', value: 'button'},
                                                {name: 'data-id', value: item.id},
                                                {name: 'data-dataId', value: item.dataId}
                                                ],
                                            content: '&nbsp;',
                                            eventHandler: [
                                                {
                                                    eventType: 'click',
                                                    handler: this.handleDeleteHistoryItem,
                                                }
                                            ]
                                        }
                                    ]
                                })
                            })
                            :[],
                    },
                ]
            },
        ];
    }
}

export default SearchHistory;