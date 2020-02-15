//STATE should be accessed and updated only through GLOBALS?

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
        
        this.reset = this.reset.bind(this);
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
}