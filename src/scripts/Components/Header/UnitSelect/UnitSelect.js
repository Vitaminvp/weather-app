import {Component} from "../../../framework";

class UnitSelect extends Component {
    constructor(host, props) {
        super(host, props);
        this.props = props;
    }

    componentWillMount() {
        this.handleUnitChange = this.handleUnitChange.bind(this);
    }

    handleUnitChange(e) {
        this.props.handleUnitChange(e)
    }

    render() {
        const unit = this.props.unit;
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
                            {name: 'value', value: this.props.unit},
                        ],
                        eventHandler: [
                            {
                                eventType: 'change',
                                handler: this.handleUnitChange,
                            }
                        ],
                        children: [
                            {
                                tag: 'option',
                                content: '&nbsp;',
                                attributes: [
                                    {name: 'value', value: ''},
                                ],
                            },
                            {
                                tag: 'option',
                                content: '&deg;C',
                                attributes: [
                                    {name: 'value', value: 'CE'},
                                    unit === 'CE' ? {name: 'selected', value: ''} : {},
                                ],
                            },
                            {
                                tag: 'option',
                                content: '&deg;F',
                                attributes: [
                                    {name: 'value', value: 'FA'},
                                    unit === 'FA' ? {name: 'selected', value: ''} : {},
                                ],
                            },
                            {
                                tag: 'option',
                                content: 'K',
                                attributes: [
                                    {name: 'value', value: 'KE'},
                                    unit === 'KE' ? {name: 'selected', value: ''} : {},
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