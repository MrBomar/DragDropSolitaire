import Pile from "../Pile/Pile";

export default class State {
    constructor(){
        this.GAME_DRAG_OPTION = true;
        this.GAME_MOBILE_USER = false;
        this.CARD_DRAG_STATUS = false;
        this.CARD_DRAG_MOUSE_ORIG_POS = false;
        this.CARD_DRAG_CARDS = false;
        this.CARD_DRAG_PILE = false;
        this.CARD_DROP_PILE = false;
        this.CARD_MOUSE_DBL_CLICK = false;
        this.CARD_MOUSE_DBL_CLICK_TARGET = false;
        this.CARD_MOVE_HISTORY = [];
        this.GAME_WIN_DETECTED = false;
        this.OBJECT_TREE = [];
        this.WINDOW_MOUSE_POS = false;
        this.WINDOW_MENU_OPEN = true;
        this.reset = this.reset.bind(this);
    }

    reset() {
        this.OBJECT_TREE.forEach(item=>{
            if(item instanceof Pile){
                item.destruct();
            };
        })
        this.GAME_DRAG_OPTION = true;
        this.GAME_MOBILE_USER = false;
        this.CARD_DRAG_STATUS = false;
        this.CARD_DRAG_MOUSE_ORIG_POS = false;
        this.CARD_DRAG_CARDS = false;
        this.CARD_DRAG_PILE = false;
        this.CARD_DROP_PILE = false;
        this.CARD_MOUSE_DBL_CLICK = false;
        this.CARD_MOUSE_DBL_CLICK_TARGET = false;
        console.log('Reset was called');
        this.CARD_MOVE_HISTORY.length = 0;
        this.GAME_WIN_DETECTED = false;
        this.OBJECT_TREE = [];
        this.WINDOW_MOUSE_POS = false;
        this.WINDOW_MENU_OPEN = true; 
    }
}