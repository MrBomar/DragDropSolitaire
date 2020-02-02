export default class State {
    constructor() {
        this.CARD_DRAG_STATUS = false;
        this.CARD_DRAG_MOUSE_ORIG_POS = false;
        this.CARD_DRAG_CARDS = false;
        this.CARD_DRAG_PILE = false;
        this.CARD_DROP_PILE = false;
        this.CARD_MOUSE_DBL_CLICK = false;
        this.CARD_MOUSE_DBL_CLICK_TARGET = false;
        this.CARD_MOUSE_DOWN = false; //Tracking current mouse down status.
        this.CARD_MOUSE_DOWN_TIMER = false; //Delayed cancelation of the mouse down action
        this.CARD_MOVE_HISTORY = [];
        this.GAME_CARDS_STRING = false;
        this.GAME_DRAG_OPTION = true;
        this.GAME_MOBILE_USER = false;
        this.GAME_WIN_DETECTED = true;
        this.OBJECT_TREE = [];
        this.WINDOW_MOUSE_POS = false;
        this.WINDOW_MENU_OPEN = true;
        this.reset = this.reset.bind(this);
    }

    reset() {
        this.OBJECT_TREE.forEach(item=>{
            item.destruct();
        })
        this.CARD_DRAG_STATUS = false;
        this.CARD_DRAG_MOUSE_ORIG_POS = false;
        this.CARD_DRAG_CARDS = false;
        this.CARD_DRAG_PILE = false;
        this.CARD_DROP_PILE = false;
        this.CARD_MOUSE_DBL_CLICK = false;
        this.CARD_MOUSE_DBL_CLICK_TARGET = false;
        this.CARD_MOUSE_DOWN = false; //Tracking current mouse down status.
        this.CARD_MOUSE_DOWN_TIMER = false; //Delayed cancelation of the mouse down action
        this.CARD_MOVE_HISTORY = [];
        this.GAME_CARDS_STRING = false;
        this.GAME_DRAG_OPTION = true;
        this.GAME_MOBILE_USER = false;
        this.GAME_WIN_DETECTED = true;
        this.OBJECT_TREE = [];
        this.WINDOW_MOUSE_POS = false;
        this.WINDOW_MENU_OPEN = true;
    }
}