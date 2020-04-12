import './index.css';
import {REFRESH_SCREEN, WINDOW_MOUSE_MOVE, WINDOW_MOUSE_UP, DETECT_MOBILE_USER} from './Globals/Globals';
import State from './State/State';
import { GameMenuFull } from './GameMenu/GameMenuFull';

let STATE = new State;
let GAME_MENU = new GameMenuFull(document.body);
export { STATE, GAME_MENU };

DETECT_MOBILE_USER();

window.addEventListener('resize', REFRESH_SCREEN);
window.addEventListener('orientationchange', REFRESH_SCREEN);

//REFRESH_SCREEN();

//This function will console.log the current state for debugging purposes
const outputState = () => {console.log(STATE)};
window.outputState = outputState;