import '../MenuButton/MenuButton.css';
import BaseClass from '../BaseClass/BaseClass';

export default class MenuButton extends BaseClass{
    constructor(parent, name, symbol, events) {
        super(name, events);
        this.parent = parent;
        this.symbol = symbol;
        this.render = this.render.bind(this);
        this.render();
    }

    render() {
        let me = document.createElement('div');
        me.id = this.name;
        me.classList.add('MenuButton');

        let mySymbol = document.createElement("h1");
        mySymbol.classList.add('MenuButtonSymbol');
        mySymbol.innerText = this.symbol;

        let myText = document.createElement("h1");
        myText.classList.add('MenuButtonText');
        myText.innerText = this.name;

        me.appendChild(mySymbol);
        me.appendChild(myText);
        this.parent.appendChild(me);
        this.element = document.getElementById(this.name);
        this.addEventListeners();
    }
}