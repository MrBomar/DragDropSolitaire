import STATE from "../State/State";
import {REFRESH_SCREEN} from "../Globals/Globals";

class Base {
    constructor(){
        this.finish = this.finish.bind(this);
    }

    finish(){
        if(STATE.CARD_DRAG_CARDS.length) STATE.CARD_DRAG_CARDS.forEach(crd=>crd.drop());
        REFRESH_SCREEN();
    }
}

class CombinedMove extends Base {
    constructor(actions){
        super();
        this.actions = actions;
    }

    reverse(){
        this.actions.forEach(action => action.reverse());
        this.finish();
    }
}

class FlipCard extends Base {
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

class MoveCard extends Base {
    constructor(){
        super();
        this.fromDeck = STATE.CARD_DRAG_PILE;
        this.toDeck = STATE.CARD_DROP_PILE;
        this.cards = STATE.CARD_DRAG_CARDS;
        this.execute = this.execute.bind(this);
        this.reverse = this.reverse.bind(this);
        this.execute();
    }

    execute(){
        this.toDeck.addCards(this.fromDeck.removeCards(this.cards));
        this.finish();
    }
    
    reverse(){
        //Part of the undo feature, will undo the action.
        this.fromDeck.addCards(this.toDeck.removeCards(this.cards));
        console.log(`MoveCard Reversed`);
        this.finish();
    }
}

const ToggleMenu = () => {
    if(STATE.WINDOW_MENU_OPEN){
        STATE.GAME_MENU.object.classList.add('menuclose');
        STATE.GAME_MENU.object2.classList.add('screenclose');
        STATE.GAME_MENU.object.classList.remove('menuopen');
        STATE.GAME_MENU.object2.classList.remove('screenopen');
        STATE.WINDOW_MENU_OPEN = false;
    } else {
        STATE.GAME_MENU.object.classList.remove('menuclose');
        STATE.GAME_MENU.object2.classList.remove('screenclose');
        STATE.GAME_MENU.object.classList.add('menuopen');
        STATE.GAME_MENU.object2.classList.add('screenopen');
        STATE.WINDOW_MENU_OPEN = true;
    }
}

const Undo = () => {
    console.log(STATE.CARD_MOVE_HISTORY);
    if (STATE.CARD_MOVE_HISTORY.length){
        console.log(`Length: ${STATE.CARD_MOVE_HISTORY.length}`);
        let move = STATE.CARD_MOVE_HISTORY.pop();
        move.reverse();
    }
}

const Action = {
    CombinedMove: CombinedMove,
    FlipCard: FlipCard,
    MoveCard: MoveCard,
    ToggleMenu: ToggleMenu,
    Undo: Undo
}

export default Action