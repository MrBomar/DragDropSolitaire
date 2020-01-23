import { STATE , GAME_MENU } from "../index";

const ToggleMenu = () => {
    if(STATE.WINDOW_MENU_OPEN){
        GAME_MENU.object.classList.add('menuclose');
        GAME_MENU.object2.classList.add('screenclose');
        GAME_MENU.object.classList.remove('menuopen');
        GAME_MENU.object2.classList.remove('screenopen');
        STATE.WINDOW_MENU_OPEN = false;
    } else {
        GAME_MENU.object.classList.remove('menuclose');
        GAME_MENU.object2.classList.remove('screenclose');
        GAME_MENU.object.classList.add('menuopen');
        GAME_MENU.object2.classList.add('screenopen');
        STATE.WINDOW_MENU_OPEN = true;
    }
}

const Undo = () => {
    if (STATE.CARD_MOVE_HISTORY.length){
        let move = STATE.CARD_MOVE_HISTORY.pop();
        move.reverse();
    }
}

const Action = {
    ToggleMenu: ToggleMenu,
    Undo: Undo
}

export default Action