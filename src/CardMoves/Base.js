import { REFRESH_SCREEN } from "../Globals/Globals";
import { STATE } from '../index';

export default class Base {
    constructor(){
        this.finish = this.finish.bind(this);
    }

    finish(){
        if(STATE.CARD_ACTION.CARDS.length) STATE.CARD_ACTION.CARDS.forEach(crd=>crd.drop());
        REFRESH_SCREEN();
    }
}