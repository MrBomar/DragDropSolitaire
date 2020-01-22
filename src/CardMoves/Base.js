import {REFRESH_SCREEN} from "../Globals/Globals";
import STATE from '../State/State';

export default class Base {
    constructor(){
        this.finish = this.finish.bind(this);
    }

    finish(){
        if(STATE.CARD_DRAG_CARDS.length) STATE.CARD_DRAG_CARDS.forEach(crd=>crd.drop());
        REFRESH_SCREEN();
    }
}