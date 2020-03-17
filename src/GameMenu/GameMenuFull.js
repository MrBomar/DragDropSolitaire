import GameMenu from "./GameMenu";
import "./GameMenuFull.css";
import MenuButton from "../MenuButton/MenuButton";
import { GAME_DEAL_RANDOM } from "../Globals/Globals";

export class GameMenuFull extends GameMenu {
    constructor(parent, buttons) {
        super(parent, 'gameMenuFull');
        this.buttons = buttons;
        this.render = this.render.bind(this);
    }

    render() {
        let me = document.createElement('div');
        me.id = this.name;
        this.parent.appendChild(me);

        this.menuItems.push(new MenuButton('=', GAME_DEAL_RANDOM));

        this.element().appendChild(this.menuItems[0].build());
    }
}