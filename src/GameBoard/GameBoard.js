import STATE from '../State/State';
import './GameBoard.css';
import Stock from '../Stock/Stock';
import Talon from '../Talon/Talon';
import Foundation from '../Foundation/Foundation';
import Deck from '../Deck/Deck';
import Tableau from '../Tableau/Tableau';
import GameMenu from '../GameMenu/GameMenu';
import {CARD_AUTO_MOVE, CARD_MOUSE_DOWN} from '../Globals/Globals';

class GameBoard {
    constructor() {
        this.name = 'gameBoard';
        this.element = this.element.bind(this);
        this.render = this.render.bind(this);
        this.refresh = this.refresh.bind(this);
        this.render();
    }

    deal() {
        //This function moves the card from stock to the tableau piles.
        let fromPile = STATE.OBJECT_TREE.find(pile => pile.name == 'stock');

        //Deal order
        this.dealOrder = [
            ['tableau1',true],['tableau2',false],['tableau3',false],['tableau4',false],['tableau5',false],['tableau6',false],['tableau7',false],
            ['tableau2',true],['tableau3',false],['tableau4',false],['tableau5',false],['tableau6',false],['tableau7',false],
            ['tableau3',true],['tableau4',false],['tableau5',false],['tableau6',false],['tableau7',false],
            ['tableau4',true],['tableau5',false],['tableau6',false],['tableau7',false],
            ['tableau5',true],['tableau6',false],['tableau7',false],
            ['tableau6',true],['tableau7',false],
            ['tableau7',true]
        ];

        //Iterate through the deal order and perform the card moves.
        this.dealOrder.forEach(item => {
            let cardArray = fromPile.topCard();
            let toPile = STATE.OBJECT_TREE.find(pile => pile.name == item[0]);
            if(!item[1]) cardArray.flip();
            CARD_AUTO_MOVE(fromPile, cardArray, toPile, false);
        });
    }

    dealRandom(){
        //Generates a random deck and places it into the stock.
        let target = STATE.OBJECT_TREE.find(item=> item.name === 'stock');
        let myDeck = new Deck;
        myDeck.random(target, this);
        this.deal();
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