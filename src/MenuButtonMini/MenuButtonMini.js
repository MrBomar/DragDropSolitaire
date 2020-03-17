import BaseClass from "../BaseClass/BaseClass";

export default class MenuButtonMini extends BaseClass {
    constructor(name, text, action, parent){
        super(name);
        this.text = text;
        this.eventListeners = [
            {
                trigger: 'click',
                action: action
            }
        ]
        this.parent = parent;
        this.render = this.render.bind(this);
    }

    render() {
        let me = document.createElement('h1');
        me.innerText = this.text;
        this.parent.appendChild(me);
        this.addClass('MenuButtonMini');
        this.addEventListeners();
    }
}