import GameMenu from "./GameMenu";
import "./GameMenuFull.css";
import MenuButton from "../MenuButton/MenuButton";
import { GAME_DEAL_RANDOM } from "../Globals/Globals";

export class GameMenuFull extends GameMenu {
    constructor(parent, buttons) {
        super(parent, 'gameMenuFull');
        this.action = this.action.bind(this);
        this.buttons = buttons;
        this.render = this.render.bind(this);
        this.render();
    }

    action() {
        alert("Full Menu Button Pressed");
    }

    render() {
        let me = document.createElement('div');
        me.id = this.name;
        this.parent.appendChild(me);
        this.element = document.getElementById(this.name);

        this.children.push(new MenuButton(this.element, 'Expand', '=', [{trigger: 'click', action: ()=>{alert('Clicked')}}]));
        this.children.push(new MenuButton(this.element, 'Random', `\u221E`, [{trigger: 'click', action: GAME_DEAL_RANDOM}]));
    }
}