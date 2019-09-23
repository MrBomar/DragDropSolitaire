import STATE from '../State/State';
import './GameBoard.css';
import Pile from '../Pile/Pile';
import Deck from '../Deck/Deck';
import Tableau from '../Tableau/Tableau';

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

        STATE.OBJECT_TREE.push(new Pile(this, 'stock'));
        STATE.OBJECT_TREE.push(new Pile(this, 'talon'));
        STATE.OBJECT_TREE.push(new Pile(this, 'spade'));
        STATE.OBJECT_TREE.push(new Pile(this, 'heart'));
        STATE.OBJECT_TREE.push(new Pile(this, 'club'));
        STATE.OBJECT_TREE.push(new Pile(this, 'diamond'));
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

        

    }

    refresh(){}
}

export default GameBoard;