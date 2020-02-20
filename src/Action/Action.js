import { STATE , GAME_MENU } from "../index";

const ToggleMenu = () => {
    if(STATE.WINDOW.MENU_OPEN){
        GAME_MENU.object.classList.add('menuclose');
        GAME_MENU.object2.classList.add('screenclose');
        GAME_MENU.object.classList.remove('menuopen');
        GAME_MENU.object2.classList.remove('screenopen');
        STATE.setMenuOpen(false);
    } else {
        GAME_MENU.object.classList.remove('menuclose');
        GAME_MENU.object2.classList.remove('screenclose');
        GAME_MENU.object.classList.add('menuopen');
        GAME_MENU.object2.classList.add('screenopen');
        STATE.setMenuOpen(true);
    }
}

const Undo = () => {
    if (STATE.GAME.MOVE_HISTORY.length) {
        STATE.popMoveHistory().reverse();
    }
}

const Action = {
    ToggleMenu: ToggleMenu,
    Undo: Undo
}

export default Action;