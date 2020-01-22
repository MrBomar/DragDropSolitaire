import STATE from '../State/State';
import './GameBoard.css';
import Stock from '../Stock/Stock';
import Talon from '../Talon/Talon';
import Foundation from '../Foundation/Foundation';
import Tableau from '../Tableau/Tableau';
import GameMenu from '../GameMenu/GameMenu';

class GameBoard {
    constructor() {
        this.name = 'gameBoard';
        this.dealRandom = this.element.bind(this);
        this.element = this.element.bind(this);
        this.render = this.render.bind(this);
        this.refresh = this.refresh.bind(this);
        this.render();
    }

    element(){
        //Return the DOM object
        return document.getElementById(this.name);
    }

    render(){
        //Generate the main game board and grid layout.
        let me = document.createElement('div');
        me.id = this.name;
        me.style.zIndex = -1;
        document.body.appendChild(me);

        //Add the different types of piles to the game board.
        STATE.OBJECT_TREE.push(new Stock(this, 'stock'));
        STATE.OBJECT_TREE.push(new Talon(this, 'talon'));
        STATE.OBJECT_TREE.push(new Foundation(this, 'spade', 'S'));
        STATE.OBJECT_TREE.push(new Foundation(this, 'heart', 'H'));
        STATE.OBJECT_TREE.push(new Foundation(this, 'club', 'C'));
        STATE.OBJECT_TREE.push(new Foundation(this, 'diamond', 'D'));
        STATE.OBJECT_TREE.push(new Tableau(this, 'tableau1'));
        STATE.OBJECT_TREE.push(new Tableau(this, 'tableau2'));
        STATE.OBJECT_TREE.push(new Tableau(this, 'tableau3'));
        STATE.OBJECT_TREE.push(new Tableau(this, 'tableau4'));
        STATE.OBJECT_TREE.push(new Tableau(this, 'tableau5'));
        STATE.OBJECT_TREE.push(new Tableau(this, 'tableau6'));
        STATE.OBJECT_TREE.push(new Tableau(this, 'tableau7'));

        //Deal the cards
        this.dealRandom();

        //Add Menu
        STATE.GAME_MENU = new GameMenu(document.body);

    }

    refresh(){}
}

export default GameBoard;