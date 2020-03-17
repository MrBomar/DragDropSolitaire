import {GAME_DEAL_RANDOM, GAME_DEAL_SOLVABLE} from '../Globals/Globals';
import Action from "../Action/Action";
import './GameMenu.css';
import MenuButton from '../MenuButton/MenuButton';
import CloseButton from '../CloseButton/CloseButton';
import BaseClass from '../BaseClass/BaseClass';

export default class GameMenu extends BaseClass {
    constructor(parent, name) {
        super(name);
        this.parent = parent;
        this.menuItems = [];
        this.menu;
        this.screen;
        this.render = this.render.bind(this);
        this.refresh = this.refresh.bind(this);
        this.render();
    }

    render(){
        //Creating the menu object
        this.menu = document.createElement("div");
        this.menu.id = 'gameMenu';
        this.addClass('menuopen');
        this.menu.classList.add('menuopen');

        //Creating the screen
        this.screen = document.createElement("div");
        this.screen.id = 'gameMenuScreen';
        this.screen.classList.add('screenopen');
        this.screen.onclick = Action.ToggleMenu;

        //These are the buttons
        this.menuItems.push(new CloseButton(Action.ToggleMenu));
        this.menuItems.push(new MenuButton('Close', Action.ToggleMenu));
        this.menuItems.push(new MenuButton('Undo', Action.Undo));
        this.menuItems.push(new MenuButton('New Random Game', GAME_DEAL_RANDOM));
        this.menuItems.push(new MenuButton('New Solvable Game', GAME_DEAL_SOLVABLE));
        this.menuItems.forEach(item=>{
            this.object.appendChild(item.build());
        })

        //Write the menu to the document body
        this.parentDocument.appendChild(this.menu);
        this.parentDocument.appendChild(this.screen);
    }

    refresh(){
        //Add refresh properties
        this.hideReveal();
    }
}