import Pile from '../Pile/Pile';
import Stock from '../Stock/Stock';

export default class State {
    constructor() {
        //Captures the action card
        this.CARD_ACTION = {
            CARDS: [],
            FROM_PILE: false,
            MOUSE_ORIG_POS: false,
            TARGET: false,
            TO_PILE: false
        }

        this.CARD_DBL_CLICK = {
            STATUS: false, //Unused, but might be used
            TARGET: false,
            TIMER: false
        }

        this.CARD_DRAG = {
            STATUS: false,
            TARGET: false,
            TIMER: false
        }

        this.CARD_MOUSE = {
            DOWN: false, //Tracks current mouse down status
            DOWN_TIMER: false //Delayed cancelation of the mouse down action
        }

        this.GAME = {
            DECK_STRING: false,
            MOBILE_USER: false,
            MOVE_HISTORY: [],
            OBJECT_TREE: [],
            WIN_DETECTED: false
        }
        
        this.WINDOW = {
            MENU_OPEN: true,
            MOUSE_POS: false
        }
        
        this.getAllPiles = this.getAllPiles.bind(this);
        this.reset = this.reset.bind(this);
        this.setDeckString = this.setDeckString.bind(this);
        this.setToPileUsingMousePOS = this.setToPileUsingMousePOS.bind(this);
        this.setWindowMousePOS = this.setWindowMousePOS.bind(this);
    }

    getAllPiles() {
        return this.GAME.OBJECT_TREE.filter(i => i instanceof Pile);
    }

    reset() {
        this.GAME.OBJECT_TREE.forEach(item=>{
            item.destruct();
        })
        this.CARD_ACTION = {
            CARDS: [],
            FROM_PILE: false,
            MOUSE_ORIG_POS: false,
            TARGET: false,
            TO_PILE: false
        }

        this.CARD_DBL_CLICK = {
            STATUS: false, //Unused, but might be used
            TARGET: false,
            TIMER: false
        }

        this.CARD_DRAG = {
            STATUS: false,
            TARGET: false,
            TIMER: false
        }

        this.CARD_MOUSE = {
            DOWN: false, //Tracks current mouse down status
            DOWN_TIMER: false //Delayed cancelation of the mouse down action
        }

        this.GAME = {
            DECK_STRING: false,
            MOBILE_USER: false,
            MOVE_HISTORY: [],
            OBJECT_TREE: [],
            WIN_DETECTED: false
        }
        
        this.WINDOW = {
            MENU_OPEN: true,
            MOUSE_POS: false
        }
    }

    setDeckString() {
        let t = "";
        this.GAME.OBJECT_TREE.find(i => i instanceof Stock).cards.forEach(j => t += j.name);
        this.GAME.DECK_STRING = t;
    }

    setToPileUsingMousePOS() {
        this.CARD_ACTION.TO_PILE = this.getAllPiles().find(pile => this.WINDOW.MOUSE_POS[0] >= pile.getLeft() &&
        this.WINDOW.MOUSE_POS[0] <= pile.getRight() &&
        this.WINDOW.MOUSE_POS[1] >= pile.getTop() &&
        this.WINDOW.MOUSE_POS[1] <= pile.getBottom());
    }

    setWindowMousePOS(e) {
        this.WINDOW.MOUSE_POS = (e.type == 'mousemove' || e.type == 'mousedown' || e.type == 'mouseup') ?
        [e.clientX, e.clientY] :
            [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    }
}