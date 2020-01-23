import GameMenu from './GameMenu/GameMenu';
import './index.css';
import {REFRESH_SCREEN, WINDOW_MOUSE_MOVE, WINDOW_MOUSE_UP, DETECT_MOBILE_USER} from './Globals/Globals';
import State from './State/State';

let STATE = new State;
let GAME_MENU = new GameMenu(document.body);
export { STATE, GAME_MENU };

DETECT_MOBILE_USER();
REFRESH_SCREEN();

window.addEventListener('resize', REFRESH_SCREEN);
window.addEventListener('orientationchange', REFRESH_SCREEN);
window.addEventListener('mousemove', WINDOW_MOUSE_MOVE);
window.addEventListener('mouseup', WINDOW_MOUSE_UP);