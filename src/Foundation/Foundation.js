import Pile from '../Pile/Pile';
import {FromAlpha} from '../Conversion/Conversion';

export default class Foundation extends Pile {
    constructor(parent, name, suite){
        super(parent, name);
        this.suite = suite;
        this.render = this.render.bind(this);
        this.validateMove = this.validateMove.bind(this);
        this.render();
    }

    render() {
        let me = document.createElement('div');
        me.id = this.name;
        me.style.zIndex = 0;
        this.cssClasses.forEach(item => me.classList.add(item));
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