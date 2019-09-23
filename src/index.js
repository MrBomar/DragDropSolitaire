import StatusIndicator from './StatusIndicator/StatusIndicator';
import GameBoard from './GameBoard/GameBoard';
import './index.css';
import STATE from './State/State';
import {REFRESH_SCREEN, WINDOW_MOUSE_MOVE, WINDOW_MOUSE_UP, DETECT_MOBILE_USER} from './Globals/Globals';

DETECT_MOBILE_USER();
STATE.OBJECT_TREE.push(new GameBoard);
STATE.OBJECT_TREE.push(new StatusIndicator(STATE.OBJECT_TREE.find(item=>item instanceof GameBoard)));
REFRESH_SCREEN();

window.addEventListener('resize', REFRESH_SCREEN);
window.addEventListener('orientationchange', REFRESH_SCREEN);
window.addEventListener('mousemove', WINDOW_MOUSE_MOVE);
window.addEventListener('mouseup', WINDOW_MOUSE_UP);