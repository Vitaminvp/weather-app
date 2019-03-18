
class Component{
    constructor(host, props = {}){
        this.host = host;
        this.props = props;
        this.state = {};
        this.componentWillMount();
        this._render();
    }

    componentWillMount(){}
    updateState(){}

    _render(){
        this.host.innerHTML = '';
        let content = this.render();
        if(!Array.isArray(content)){
            content = [content];  // this.host.innerHTML = content;
        }
        content.map(item => this._vDomPrototypeElementToHtmlElement(item)) // [string|HTMLElement] => [HTMLElement]
            .forEach(htmlElement=>{
                this.host.appendChild(htmlElement);
            });
    }
    /* @return {string|[string|HTMLElement|Component]} => [HTMLElement, HTMLElement]*/
    render(){
        return this.host.innerHTML = 'No child method !';
    }

    /**
     *
     * @param {string|HTMLElement|Object} element
     *
     */

    _vDomPrototypeElementToHtmlElement(element){
        if(typeof element === 'string'){
            let container;
            const containsHtmlTags = /[<>&]/.test(element);
            if (containsHtmlTags) {
                container = document.createElement('div');
                container.innerHTML = element;
            } else {
                container = document.createTextNode(element);
            }
            return container;
        } else {
            if (element.tag){
                if (typeof element.tag === "function"){
                    const container = document.createDocumentFragment();
                    new element.tag(container, element.props);
                    return container;
                }else{
                    //string
                    const container = document.createElement(element.tag);
                    if(element.content){
                        container.innerHTML = element.content;
                    }
                    //ensure following element properties that should be Array

                    ['classList', 'attributes', 'children', 'eventHandler'].forEach(item => {
                        if(element[item] && !Array.isArray(element[item])){
                            element[item] = [element[item]];
                        }
                    });
                    if(element.classList){
                        container.classList.add(...element.classList);
                    }
                    if(element.attributes){
                        element.attributes.forEach(attributeSpec => {
                            container.setAttribute(attributeSpec.name, attributeSpec.value);
                        });
                    }

                    if(element.eventHandler){
                        element.eventHandler.forEach(item => {
                            container.addEventListener(item.eventType, item.handler);
                        });

                    }
                    if(element.children){
                        element.children.forEach(el => {
                            const htmlElement = this._vDomPrototypeElementToHtmlElement(el);
                            container.appendChild(htmlElement);
                        });
                    }
                    return container;
                }
            }
            return element;
        }
    }
}

export default Component;