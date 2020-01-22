import STATE from "../State/State";

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