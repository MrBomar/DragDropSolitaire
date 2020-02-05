import Base from './Base';

export default class MoveCard extends Base {
    constructor(fromPile, cards, toPile){
        super();
        this.fromPile = fromPile;
        this.toPile = toPile;
        this.cards = cards;
        this.execute = this.execute.bind(this);
        this.reverse = this.reverse.bind(this);
        this.execute();
    }

    execute(){
        this.toPile.addCards(this.fromPile.removeCards(this.cards));
        this.finish();
    }
    
    reverse(){
        //Part of the undo feature, will undo the action.
        this.fromPile.addCards(this.toPile.removeCards(this.cards));
        this.finish();
    }
}