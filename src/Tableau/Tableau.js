import Pile from '../Pile/Pile';

export default class Tableau extends Pile {
    constructor(parent, name) {
        super(parent, name);
        this.limit = name.charAt(name.length-1);
        this.refresh = this.refresh.bind(this);
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

}