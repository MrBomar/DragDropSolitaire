import Pile from '../Pile/Pile';
import {ToSymbol} from '../Conversion/Conversion';
import {FromAlpha} from '../Conversion/Conversion';
import './Foundation.css';

export default class Foundation extends Pile {
    constructor(parent, name, suite){
        super(parent, name);
        this.cssClasses = ["foundation", "topPile"];
        this.suite = suite;
        this.render = this.render.bind(this);
        this.validateMove = this.validateMove.bind(this);
        this.render();
    }

    render() {
        let me = document.createElement('h1');
        me.id = this.name;
        me.style.zIndex = 0;
        me.style.color = (this.suite == "S" || this.suite == "C")? "black" : "red" ;
        me.innerText = ToSymbol(this.suite);
        this.cssClasses.forEach(item => me.classList.add(item));
        me.classList.add("symbol");
        this.parent.element().appendChild(me);
    }

    validateMove(aCard) {
        if(aCard.length == 1) {
            if(!!this.cardCount() && aCard[0].suite === this.suite) {
                return(FromAlpha(this.topCard().value) === FromAlpha(aCard[0].value)-1)? true: false;
            } else if(aCard[0].value === 'A' && aCard[0].suite === this.suite) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}