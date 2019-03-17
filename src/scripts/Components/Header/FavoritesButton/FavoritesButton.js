import { Component } from "../../../framework";

class FavoritesButton extends Component{
    constructor(host, props){
        super(host, props);
        this.props = props;
        this.componentWillMount();
    }
    componentWillMount(){
        this.onCityLike = this.onCityLike.bind(this);
    }
    onCityLike(){
        this.props.onCityLike();
    }
    render(){
        const star = this.props.isLiked ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
       return [
           {
               tag: 'button',
               classList: ['search__star'],
               content: star,
               attributes: [
                   {name: 'type', value: 'button'},
                   {name: 'title', value: 'Add to favorite'},
               ],
               eventHandler: [
                   {
                       eventType: 'click',
                       handler: this.onCityLike,
                   }
               ]
           },
       ];
    }
}

export default FavoritesButton;