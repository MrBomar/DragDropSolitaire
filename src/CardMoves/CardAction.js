import MoveCard from './MoveCard';
import FlipCard from './FlipCard';
import CombinedMove from './CombinedMove';
import Stock from '../Stock/Stock';
import { STATE } from '../index';
import Tableau from '../Tableau/Tableau';
import Card from '../Card/Card';

export default class CardAction {
    constructor(fromPile, cards, toPile) {
        this.actions = [];
        this.cards = (cards instanceof Card)? [cards] : cards;
        this.fromPile = fromPile;
        this.toPile = toPile;
        this.assess = this.assess.bind(this);
        this.execute = this.execute.bind(this);
        this.getPile = this.getPile.bind(this);
        this.assess();
    }

    assess() {
        if(this.fromPile instanceof Stock && this.fromPile.cards.length > 0) {
            this.actions.push(new FlipCard(this.cards[0]));
            this.actions.push(new MoveCard(this.fromPile, this.cards, this.toPile));
            this.execute();
            return true;
        } else if (this.toPile.validateMove(this.cards)) {
            this.actions.push(new MoveCard(this.fromPile, this.cards, this.toPile));
            if(this.fromPile instanceof Tableau && this.fromPile.cards.length > 0) {
                if(!this.fromPile.topCard().face) {
                    this.actions.push(new FlipCard(this.fromPile.topCard()))
                }
            }
            this.execute();
            return true;
        } else {
            return false;
        }
    }

    execute() {
        STATE.addMoveToHistory(new CombinedMove(this.actions));
        if(STATE.getGameBoard().detectWin()) STATE.setWinDetected(true);
        //FIX ME
        //From here we can call the function to send solved deck string to server
    }

    getPile(name) {
        return STATE.getAllPiles().find(pile => pile.name == name);
    }
}