import Pile from '../Pile/Pile';
import {FromAlpha} from '../Conversion/Conversion';
import './Tableau.css';

export default class Tableau extends Pile {
    constructor(parent, name) {
        super(parent, name);
        this.cssClasses = ['tableau'];
        this.limit = name.charAt(name.length-1);
        this.refresh = this.refresh.bind(this);
        this.render = this.render.bind(this);
        this.validateMove = this.validateMove.bind(this);
        this.render();
    }

    refresh() {
        if(this.cards.length){
            let marginTotal = 0;
            this.cards.forEach(card => {
                card.setTop(this.element().offsetTop + marginTotal);
                let baseMargin = card.getHeight() / 4;
                marginTotal = (card.face)? marginTotal + baseMargin : marginTotal + baseMargin / 2;
                card.setLeft(this.getLeft());
                card.setZIndex(this.cards.indexOf(card));
            })
        }
    }

    render() {
        let me = document.createElement('div');
        me.id = this.name;
        me.style.zIndex = 0;
        this.cssClasses.forEach(item => me.classList.add(item));
        this.parent.element().appendChild(me);
    }

    validateMove(aCard) {
        if(this.cards.length){
            if((aCard[0].color != this.topCard().color) && (FromAlpha(aCard[0].value) == FromAlpha(this.topCard().value) -1)){
                return true;
            } else {
                return false;
            }   
        } else if((this.cardCount() == 0) && (FromAlpha(aCard[0].value) == 12)){
            return true;
        }
    }

}