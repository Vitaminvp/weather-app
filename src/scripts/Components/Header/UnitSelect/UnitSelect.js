import { Component } from "../../../framework";

class UnitSelect extends Component{
    constructor(host, props){
        super(host, props);

    }
    render(){
       return [
           {
               tag: 'label',
               attributes: [
                   {name: 'for', value: 'units'},
               ],
               children: [
                   {
                       tag: 'select',
                       classList: 'search__units',
                       attributes: [
                           {name: 'id', value: 'units'},
                           {name: 'title', value: 'Select units'},
                       ],
                       children: [
                           {
                               tag: 'option',
                               content: '&deg;C',
                               attributes: [
                                   {name: 'value', value: 'CE'},
                                   {name: 'selected', value: ''},
                               ],
                           },
                           {
                               tag: 'option',
                               content: 'K',
                               attributes: [
                                   {name: 'value', value: 'FA'},
                               ],
                           },
                       ],
                   }
               ]
           },
       ];
    }
}

export default UnitSelect;