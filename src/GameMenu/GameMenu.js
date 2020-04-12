import './GameMenu.css';
import BaseClass from '../BaseClass/BaseClass';

export default class GameMenu extends BaseClass {
    constructor(parent, name) {
        super(name);
        this.parent = parent;
        this.menuItems = [];
        this.menu;
        this.screen;
        this.refresh = this.refresh.bind(this);
    }

    refresh(){
        //Add refresh properties
        this.hideReveal();
    }
}