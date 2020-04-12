import Pile from '../Pile/Pile';
import {PILE_STOCK_CLICK} from '../Globals/Globals';

export default class Stock extends Pile {
    constructor(parent, name){
        super(parent, name);
        this.clickEvents = [
            {
                trigger: "mousedown",
                action: PILE_STOCK_CLICK
            }
        ];
        this.render = this.render.bind(this);
        this.validateMove = this.validateMove.bind(this);
        this.render();
    }

    render() {
        let me = document.createElement('div');
        me.id = this.name;
        me.style.zIndex = 0;
        this.cssClasses.forEach(item => me.classList.add(item));
        this.parent.element.appendChild(me);
        this.clickEvents.forEach(item => me.addEventListener(item.trigger, item.action));
        this.element = document.getElementById(this.name);
    }

    validateMove(aCard){
        //FIX ME??
    }
}