import {Component} from "../../../framework/";


class FavouriteLocations extends Component {
    constructor(host, props) {
        super(host, props);
        this.props = props;
    }

    componentWillMount() {
        ['handleDeleteAllLikes', 'handleItemClick', 'handleDeleteFavoriteItem']
            .forEach(name => this[name] = this[name].bind(this));
    }

    handleDeleteAllLikes() {
        this.props.handleDeleteAllLikes();
    }

    handleItemClick(e){
        this.props.handleItemClick(e)
    }

    handleDeleteFavoriteItem(e){
        this.props.handleDeleteFavoriteItem(e)
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
                                content: '<i class="far fa-trash-alt"></i>',
                                eventHandler: [
                                    {
                                        eventType: 'click',
                                        handler: this.handleDeleteAllLikes,
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        tag: 'ul',
                        classList: ['favorite__list'],
                        children: this.props.likes ?
                            this.props.likes.map(item => {
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
                                            attributes: [{name: 'type', value: 'button'}, {name: 'data-id', value: item.id}],
                                            content: '',
                                            eventHandler: [
                                                {
                                                    eventType: 'click',
                                                    handler: this.handleDeleteFavoriteItem,
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

export default FavouriteLocations;