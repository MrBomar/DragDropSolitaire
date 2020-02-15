import './GameBoard.css';
import Stock from '../Stock/Stock';
import Talon from '../Talon/Talon';
import Foundation from '../Foundation/Foundation';
import Tableau from '../Tableau/Tableau';
import { STATE } from '../index';
import QuickSolve from '../QuickSolve/QuickSolve';
import Action from '../Action/Action';

export default class GameBoard {
    constructor() {
        this.name = 'gameBoard';
        this.clickEvent = this.clickEvent.bind(this);
        this.eventListeners = [
            {
                trigger: "click",
                action: this.clickEvent
            }
        ];
        this.allTableau = this.allTableau.bind(this);
        this.detectWin = this.detectWin.bind(this);
        this.destruct = this.destruct.bind(this);
        this.element = this.element.bind(this);
        this.render = this.render.bind(this);
        this.refresh = this.refresh.bind(this);
        this.render();
    }

    allTableau() {
        return STATE.GAME.OBJECT_TREE.filter(pile => pile instanceof Tableau);
    }

    clickEvent(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log(e);
        if(e.target.id == this.name)Action.ToggleMenu();
    }

    detectWin() {
        //Cycles the Tableau and checks to see if any piles are unsolved
        return this.allTableau().find(pile => pile.solved() == false)? false: true;
    }

    destruct() {
        this.eventListeners.forEach(item => {
            this.element().removeEventListener(item.trigger, item.action);
        })
        this.element().remove();
    }

    element() {
        //Return the DOM object
        return document.getElementById(this.name);
    }

    render() {
        //Generate the main game board and grid layout.
        let me = document.createElement('div');
        me.id = this.name;
        me.style.zIndex = -1;
        document.body.appendChild(me);
        this.eventListeners.forEach(item => {
            me.addEventListener(item.trigger, item.action);
        })

        //Add the different types of piles to the game board.
        STATE.GAME.OBJECT_TREE.push(new Stock(this, 'stock'));
        STATE.GAME.OBJECT_TREE.push(new Talon(this, 'talon'));
        STATE.GAME.OBJECT_TREE.push(new Foundation(this, 'spade', 'S'));
        STATE.GAME.OBJECT_TREE.push(new Foundation(this, 'heart', 'H'));
        STATE.GAME.OBJECT_TREE.push(new Foundation(this, 'club', 'C'));
        STATE.GAME.OBJECT_TREE.push(new Foundation(this, 'diamond', 'D'));
        STATE.GAME.OBJECT_TREE.push(new Tableau(this, 'tableau1'));
        STATE.GAME.OBJECT_TREE.push(new Tableau(this, 'tableau2'));
        STATE.GAME.OBJECT_TREE.push(new Tableau(this, 'tableau3'));
        STATE.GAME.OBJECT_TREE.push(new Tableau(this, 'tableau4'));
        STATE.GAME.OBJECT_TREE.push(new Tableau(this, 'tableau5'));
        STATE.GAME.OBJECT_TREE.push(new Tableau(this, 'tableau6'));
        STATE.GAME.OBJECT_TREE.push(new Tableau(this, 'tableau7'));
        STATE.GAME.OBJECT_TREE.push(new QuickSolve(this));
    }

    refresh(){}
}