import BaseClass from "../BaseClass/BaseClass";
import {ToSymbol, ToFaceValue} from '../Conversion/Conversion';
import {CARD_MOUSE_DOWN} from '../Globals/Globals';
import './Card.css';

export default class Card extends BaseClass {
    constructor(set, suite, value, parent, face){
        super(set+suite+value);
        this.color = (suite === 'H' || suite === 'D')?'red':'black';
        this.face = face;
        this.suite = suite;
        this.value = value;
        this.set = set;
        this.valueSymbol = ToFaceValue(value);
        this.suiteSymbol = ToSymbol(suite);
        this.parent = parent;
        this.dragStartPOS = [];
        this.eventListeners = [
            {
                trigger: "mousedown",
                action: CARD_MOUSE_DOWN
            },
            {
                trigger: "touchstart",
                action: CARD_MOUSE_DOWN
            }
        ];
        this.cssClasses = [
            'card'
        ]
        this.destruct = this.destruct.bind(this);
        this.drag = this.drag.bind(this);
        this.drop = this.drop.bind(this);
        this.flip = this.flip.bind(this);
        this.getFace = this.getFace.bind(this);
        this.render = this.render.bind(this);
        this.render();
    }

    drag(margin) {
        //Adjust position
        this.setLeft(this.dragStartPOS[0]+margin[0]);
        this.setTop(this.dragStartPOS[1]+margin[1]);

        //Shade the card
        this.element().classList.add('shade');

        //Adjust ZIndex
        this.element().style.zIndex = this.zIndex + 100;
    }

    drop() {
        this.element().classList.remove('shade');
    }

    destruct(){
        this.destructor();
    }

    flip() {
        //Change the value
        if(!this.face){
            this.removeClass('cardBack');
            this.addClass('cardFront');
            this.face = true;
        } else {
            this.addClass('cardBack');
            this.removeClass('cardFront');
            this.face = false;
        }
    }

    getFace() {return this.face};

    render(){
        let me = document.createElement("div");
        me.innerHTML = `
                        <h2 class="cardTopLeft">${this.valueSymbol}</h3>
                        <h2 class="cardTopRight">${this.suiteSymbol}</h2>
                        <h1 class="cardMiddle">${this.suiteSymbol}</h1>
                        <h2 class="cardBottomLeft">${this.suiteSymbol}</h2>
                        <h2 class="cardBottomRight">${this.valueSymbol}</h3>`;           
        me.classList.add(this.suite);
        if(this.face) {
            me.classList.add('cardFront');
        } else {
            me.classList.add("cardBack");
        }
        this.cssClasses.forEach(item => me.classList.add(item));
        me.id = this.name;
        this.parent.element().appendChild(me);
        this.addEventListeners();
    }
}