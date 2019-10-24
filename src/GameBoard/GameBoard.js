import STATE from '../State/State';
import './GameBoard.css';
import Stock from '../Stock/Stock';
import Talon from '../Talon/Talon';
import Foundation from '../Foundation/Foundation';
import Deck from '../Deck/Deck';
import Tableau from '../Tableau/Tableau';
import StatusIndicator from '../StatusIndicator/StatusIndicator';

class GameBoard {
    constructor() {
        this.name = 'gameBoard';
        this.element = this.element.bind(this);
        this.render = this.render.bind(this);
        this.refresh = this.refresh.bind(this);
        this.render();
    }

    element(){
        return document.getElementById(this.name);
    }

    render(){
        let me = document.createElement('div');
        me.id = this.name;
        me.style.zIndex = -1;
        document.body.appendChild(me);

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

        let target = STATE.OBJECT_TREE.find(item=> item.name === 'stock');
        let myDeck = new Deck;
        myDeck.random(target, this);

        let crap = new StatusIndicator(document.body);
    }

    refresh(){}
}

export default GameBoard;