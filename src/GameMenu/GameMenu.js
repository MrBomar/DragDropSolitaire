import {GAME_DEAL_RANDOM} from '../Globals/Globals';
import Action from "../Action/Action";
import './GameMenu.css';
//import GameBoard from '../GameBoard/GameBoard';
import MenuButton from '../MenuButton/MenuButton';
import CloseButton from '../CloseButton/CloseButton';

class GameMenu {
    constructor(parentDocument){
        this.parentDocument = parentDocument;
        this.menuItems = [];
        this.object;
        this.object2;
        this.render = this.render.bind(this);
        this.refresh = this.refresh.bind(this);
        this.render();
    }

    render(){
        //Creating the menu object
        this.object = document.createElement("div");
        this.object.id = 'gameMenu';
        this.object.classList.add('menuopen');

        //Creating the screen
        this.object2 = document.createElement("div");
        this.object2.id = 'gameMenuScreen';
        this.object2.classList.add('screenopen');
        this.object2.onclick = Action.ToggleMenu;

        //These are the buttons
        this.menuItems.push(new CloseButton(Action.ToggleMenu));
        this.menuItems.push(new MenuButton('Close', Action.ToggleMenu));
        this.menuItems.push(new MenuButton('Undo', Action.Undo));
        this.menuItems.push(new MenuButton('Deal Random', GAME_DEAL_RANDOM));
        this.menuItems.forEach(item=>{
            this.object.appendChild(item.build());
        })

        //Write the menu to the document body
        this.parentDocument.appendChild(this.object);
        this.parentDocument.appendChild(this.object2);
    }

    refresh(){
        let me = document.getElementById('statusIndicatorMessage');
        
        //Add refresh properties
        this.hideReveal();
    }
}

export default GameMenu;