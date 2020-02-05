import { STATE , GAME_MENU } from "../index";

const ToggleMenu = () => {
    if(STATE.WINDOW.MENU_OPEN){
        GAME_MENU.object.classList.add('menuclose');
        GAME_MENU.object2.classList.add('screenclose');
        GAME_MENU.object.classList.remove('menuopen');
        GAME_MENU.object2.classList.remove('screenopen');
        STATE.WINDOW.MENU_OPEN = false;
    } else {
        GAME_MENU.object.classList.remove('menuclose');
        GAME_MENU.object2.classList.remove('screenclose');
        GAME_MENU.object.classList.add('menuopen');
        GAME_MENU.object2.classList.add('screenopen');
        STATE.WINDOW.MENU_OPEN = true;
    }
}

const Undo = () => {
    if (STATE.GAME.MOVE_HISTORY.length){
        let move = STATE.GAME.MOVE_HISTORY.pop();
        move.reverse();
    }
}

const Action = {
    ToggleMenu: ToggleMenu,
    Undo: Undo
}

export default Action;