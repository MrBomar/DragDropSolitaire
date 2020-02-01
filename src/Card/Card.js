import {ToSymbol, ToFaceValue} from '../Conversion/Conversion';
import {CARD_MOUSE_DOWN} from '../Globals/Globals';
import './Card.css';

export default class Card {
    constructor(set, suite, value, parent, face){
        this.color = (suite === 'H' || suite === 'D')?'red':'black';
        this.face = face;
        this.suite = suite;
        this.value = value;
        this.set = set;
        this.valueSymbol = ToFaceValue(value);
        this.suiteSymbol = ToSymbol(suite);
        this.name = set+suite+value;
        this.parent = parent;
        this.dragStartPOS = [];
        this.zIndex = 0;
        this.clickEvents = [
            {
                trigger: "mousedown",
                action: CARD_MOUSE_DOWN
            }
        ];
        this.cssClasses = [
            'card'
        ]
        this.addClass = this.addClass.bind(this);
        this.destruct = this.destruct.bind(this);
        this.drag = this.drag.bind(this);
        this.drop = this.drop.bind(this);
        this.element = this.element.bind(this);
        this.flip = this.flip.bind(this);
        this.getFace = this.getFace.bind(this);
        this.getTop = this.getTop.bind(this);
        this.getLeft = this.getLeft.bind(this);
        this.getHeight = this.getHeight.bind(this);
        this.getWidth = this.getWidth.bind(this);
        this.removeClass = this.removeClass.bind(this);
        this.render = this.render.bind(this);
        this.setTop = this.setTop.bind(this);
        this.setLeft = this.setLeft.bind(this);
        this.setZIndex = this.setZIndex.bind(this);
        this.render();
    }

    addClass(a) {this.element().classList.add(a)}

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
        this.clickEvents.forEach(item => this.element().removeEventListener(item.trigger, item.action));
        this.element().remove();
    }

    element() {
        return document.getElementById(this.name);
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
    getTop() {return this.element().offsetTop};
    getLeft() {return this.element().offsetLeft};
    getHeight() {return this.element().offsetHeight};
    getWidth() {return this.element().offsetWidth};

    removeClass(a) {this.element().classList.remove(a)}

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
        this.clickEvents.forEach(item => me.addEventListener(item.trigger, item.action));
    }

    setTop(y) {this.element().style.top = `${y}px`};
    setLeft(x) {this.element().style.left = `${x}px`};
    setZIndex(z) {
        this.element().style.zIndex = z;
        this.zIndex = z;
    };
}