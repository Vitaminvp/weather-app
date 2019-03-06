import { Component } from "../../../framework";

class FavoritesButton extends Component{
    constructor(host, props){
        super(host, props);

    }
    render(){
       return [
           {
               tag: 'button',
               classList: ['search__star'],
               content: '<i class="far fa-star"></i>',
               attributes: [
                   {name: 'type', value: 'button'},
                   {name: 'title', value: 'Add to favorite'},
               ]
           },
       ];
    }
}

export default FavoritesButton;