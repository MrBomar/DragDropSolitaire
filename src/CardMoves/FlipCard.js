import Base from './Base';

export default class FlipCard extends Base {
    constructor(card){
        super();
        this.card = card;
        this.execute = this.execute.bind(this);
        this.reverse = this.reverse.bind(this);
        this.execute();
    }

    execute(){
        this.card.flip();
        this.finish();
    }

    reverse(){
        this.card.flip();
        this.finish();
    }
}