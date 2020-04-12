import './GameBoard.css';
import BaseClass from '../BaseClass/BaseClass';
import Pile from '../Pile/Pile';
import Stock from '../Stock/Stock';
import Talon from '../Talon/Talon';
import Foundation from '../Foundation/Foundation';
import Tableau from '../Tableau/Tableau';
import { STATE } from '../index';
import QuickSolve from '../QuickSolve/QuickSolve';
import Action from '../Action/Action';
import { WINDOW_MOUSE_MOVE, WINDOW_MOUSE_UP } from '../Globals/Globals';

export default class GameBoard extends BaseClass{
    constructor() {
        super(name, [
            {
                trigger: "touchmove",
                action: WINDOW_MOUSE_MOVE
            },
            {
                trigger: "mousemove",
                action: WINDOW_MOUSE_MOVE
            },
            {
                trigger: "mouseup",
                action: WINDOW_MOUSE_UP
            },
            {
                trigger: "touchend",
                action: WINDOW_MOUSE_UP
            }
        ]);
        this.name = 'gameBoard';
        this.detectWin = this.detectWin.bind(this);
        this.element = this.element.bind(this);
        this.render = this.render.bind(this);
        this.refresh = this.refresh.bind(this);
        this.render();
    }

    detectWin() {
        //Cycles the Tableau and checks to see if any piles are unsolved
        return STATE.getTableau().filter(pile => pile.solved() == false)? false: true;
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
        this.element = document.getElementById(this.name);

        //Add the different types of piles to the game board.
        this.children.push(new Stock(this, 'stock'));
        this.children.push(new Talon(this, 'talon'));
        this.children.push(new Foundation(this, 'spade', 'S'))
        this.children.push(new Foundation(this, 'heart', 'H'));
        this.children.push(new Foundation(this, 'club', 'C'));
        this.children.push(new Foundation(this, 'diamond', 'D'));
        this.children.push(new Tableau(this, 'tableau1'));
        this.children.push(new Tableau(this, 'tableau2'));
        this.children.push(new Tableau(this, 'tableau3'));
        this.children.push(new Tableau(this, 'tableau4'));
        this.children.push(new Tableau(this, 'tableau5'));
        this.children.push(new Tableau(this, 'tableau6'));
        this.children.push(new Tableau(this, 'tableau7'));
        this.children.push(new QuickSolve(this));
        this.addEventListeners();
    }

    refresh(){
        this.children.forEach(i => i.refresh());
    }
}