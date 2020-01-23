import {ALL_PILES} from '../Globals/Globals';
import MoveCard from './MoveCard';
import FlipCard from './FlipCard';
import CombinedMove from './CombinedMove';
import Stock from '../Stock/Stock';
import { STATE } from '../index';
import Tableau from '../Tableau/Tableau';
import GameBoard from '../GameBoard/GameBoard';

export default class CardAction {
    constructor(fromPile, cards, toPile) {
        this.actions = [];
        this.cards = cards;
        this.fromPile = fromPile;
        this.toPile = toPile;
        this.assess = this.assess.bind(this);
        this.execute = this.execute.bind(this);
        this.getPile = this.getPile.bind(this);
        this.assess();
    }

    assess() {
        if(this.fromPile instanceof Stock) {
            //Combine actions
            this.actions.push(new FlipCard(this.cards[0]));
            this.actions.push(new MoveCard(this.fromPile, this.cards, this.toPile));
            this.execute();
        } else if (this.toPile.validateMove(this.cards)) {
            this.actions.push(new MoveCard(this.fromPile, this.cards, this.toPile));
            if(this.fromPile instanceof Tableau && this.fromPile.cards.length > 0) {
                if(!this.fromPile.topCard().face)this.actions.push(new FlipCard(this.fromPile.topCard()));
            }
            this.execute();
        }
    }

    execute() {
        STATE.CARD_MOVE_HISTORY.push(new CombinedMove(this.actions));
        if(STATE.OBJECT_TREE.find(pile=>pile instanceof GameBoard).detectWin()) STATE.GAME_WIN_DETECTED = true;
    }

    getPile(name) {
        return ALL_PILES().find(pile => name);
    }
}