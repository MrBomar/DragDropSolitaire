import Foundation from '../Foundation/Foundation';
import GameBoard from '../GameBoard/GameBoard';
import Pile from '../Pile/Pile';
import Stock from '../Stock/Stock';
import Tableau from '../Tableau/Tableau';
import Talon from "../Talon/Talon";
import {STATE} from "../index";

export default class State {
    constructor() {
        //Captures the action card
        this.CARD_ACTION = {
            CARDS: [],
            FROM_PILE: false,
            MOUSE_ORIG_POS: false,
            TARGET: false,
            TO_PILE: false
        }

        this.CARD_DBL_CLICK = {
            STATUS: false, //Unused, but might be used
            TARGET: false,
            TIMER: false
        }

        this.CARD_DRAG = {
            STATUS: false,
            TARGET: false,
            TIMER: false
        }

        this.CARD_MOUSE = {
            DOWN: false, //Tracks current mouse down status
            DOWN_TIMER: false //Delayed cancelation of the mouse down action
        }

        this.GAME = {
            DECK_STRING: false,
            MOBILE_USER: false,
            MOVE_HISTORY: [],
            OBJECT_TREE: [],
            WIN_DETECTED: false
        }
        
        this.WINDOW = {
            MENU_OPEN: true,
            MOUSE_POS: false
        }
        
        this.addMoveToHistory = this.addMoveToHistory.bind(this);
        this.addToObjectTree = this.addToObjectTree.bind(this);
        this.clearCardAction = this.clearCardAction.bind(this);
        this.clearCardDblClick = this.clearCardDblClick.bind(this);
        this.clearDblClickTimer = this.clearDblClickTimer.bind(this);
        this.clearDragCard = this.clearDragCard.bind(this);
        this.clearDragTimer = this.clearDragTimer.bind(this);
        this.clearDropState = this.clearDropState.bind(this);
        this.getAllPiles = this.getAllPiles.bind(this);
        this.getFoundations = this.getFoundations.bind(this);
        this.getGameBoard = this.getGameBoard.bind(this);
        this.getStock = this.getStock.bind(this);
        this.getTalon = this.getTalon.bind(this);
        this.getTableau = this.getTableau.bind(this);
        this.popMoveHistory = this.popMoveHistory.bind(this);
        this.reset = this.reset.bind(this);
        this.setActionCards = this.setActionCards.bind(this);
        this.setActionFromPile = this.setActionFromPile.bind(this);
        this.setActionToPile = this.setActionToPile.bind(this);
        this.setActionTarget = this.setActionTarget.bind(this);
        this.setActionMouseOrigPOS = this.setActionMouseOrigPOS.bind(this);
        this.setCardMouseDown = this.setCardMouseDown.bind(this);
        this.setDblClickStatus = this.setDblClickStatus.bind(this);
        this.setDblClickTarget = this.setDblClickTarget.bind(this);
        this.setDblClickTimer = this.setDblClickTimer.bind(this);
        this.setDeckString = this.setDeckString.bind(this);
        this.setDragStatus = this.setDragStatus.bind(this);
        this.setDragTarget = this.setDragTarget.bind(this);
        this.setDragTimer = this.setDragTimer.bind(this);
        this.setMenuOpen = this.setMenuOpen.bind(this);
        this.setMobileUser = this.setMobileUser.bind(this);
        this.setToPileUsingMousePOS = this.setToPileUsingMousePOS.bind(this);
        this.setWinDetected = this.setWinDetected.bind(this);
        this.setWindowMousePOS = this.setWindowMousePOS.bind(this);
    }

    addMoveToHistory(a) {
        this.GAME.MOVE_HISTORY.push(a);
    }

    addToObjectTree(a) {
        this.GAME.OBJECT_TREE.push(a);
    }

    clearCardAction() {
        this.CARD_ACTION = {
            CARDS: [],
            FROM_PILE: false,
            MOUSE_ORIG_POS: false,
            TARGET: false,
            TO_PILE: false
        };
    }

    clearCardDblClick() {
        this.CARD_DBL_CLICK = {
            STATUS: false,
            TARGET: false,
            TIMER: false
        }
    }
    
    clearDblClickTimer() {
        clearTimeout(this.CARD_DBL_CLICK.TIMER);
        this.CARD_DBL_CLICK.TIMER = false;
    }

    clearDragCard() {
        this.CARD_DRAG = {
            STATUS: false,
            TARGET: false,
            TIMER: false
        }
    }

    clearDragTimer() {
        clearTimeout(this.CARD_DRAG.TIMER);
        this.CARD_DRAG.TIMER = false;
    }

    clearDropState() {
        this.clearCardAction();
        this.clearCardDblClick();
        this.clearDragCard();
        console.log(STATE);
    }

    getAllPiles() {
        return this.GAME.OBJECT_TREE.filter(i => i instanceof Pile);
    }

    getFoundations() {
        return this.GAME.OBJECT_TREE.filter(i => i instanceof Foundation);
    }

    getGameBoard() {
        return this.GAME.OBJECT_TREE.find(i => i instanceof GameBoard);
    }

    getStock() {
        return this.GAME.OBJECT_TREE.find(i => i instanceof Stock);
    }

    getTalon() {
        return this.GAME.OBJECT_TREE.find(i => i instanceof Talon);
    }

    getTableau() {
        return this.GAME.OBJECT_TREE.filter(i => i instanceof Tableau);
    }

    popMoveHistory() {
        return this.GAME.MOVE_HISTORY.pop();
    }

    reset() {
        this.GAME.OBJECT_TREE.forEach(item=>{
            item.destruct();
        })
        this.CARD_ACTION = {
            CARDS: [],
            FROM_PILE: false,
            MOUSE_ORIG_POS: false,
            TARGET: false,
            TO_PILE: false
        }

        this.CARD_DBL_CLICK = {
            STATUS: false, //Unused, but might be used
            TARGET: false,
            TIMER: false
        }

        this.CARD_DRAG = {
            STATUS: false,
            TARGET: false,
            TIMER: false
        }

        this.CARD_MOUSE = {
            DOWN: false, //Tracks current mouse down status
            DOWN_TIMER: false //Delayed cancelation of the mouse down action
        }

        this.GAME = {
            DECK_STRING: false,
            MOBILE_USER: false,
            MOVE_HISTORY: [],
            OBJECT_TREE: [],
            WIN_DETECTED: false
        }
        
        this.WINDOW = {
            MENU_OPEN: true,
            MOUSE_POS: false
        }
    }

    setActionCards(a) {
        this.CARD_ACTION.CARDS = a;
    }

    setActionFromPile(a) {
        this.CARD_ACTION.FROM_PILE = a;
    }

    setActionToPile(a) {
        if(a === false) {
            this.CARD_ACTION.TO_PILE = false;
        } else {
            this.CARD_ACTION.TO_PILE = a;
        }
    }

    setActionTarget(a) {
        //Passed value is a DOM object
        this.CARD_ACTION.TARGET = a;
    }

    setActionMouseOrigPOS() {
        //Sets the OrigPOS to the current Mouse POS
        this.CARD_ACTION.MOUSE_ORIG_POS = this.WINDOW.MOUSE_POS;
    }

    setCardMouseDown(a) {
        this.CARD_MOUSE.DOWN = a;
    }

    setDblClickStatus(a) {
        this.CARD_DBL_CLICK.STATUS = a;
    }

    setDblClickTarget(a) {
        this.CARD_DBL_CLICK.TARGET = a;
    }

    setDblClickTimer(a) {
        this.CARD_DBL_CLICK.TIMER = a;
    }

    setDeckString() {
        let t = "";
        this.GAME.OBJECT_TREE.find(i => i instanceof Stock).cards.forEach(j => t += j.name);
        this.GAME.DECK_STRING = t;
    }

    setDragStatus(a) {
        this.CARD_DRAG.STATUS = a;
    }

    setDragTarget(a) {
        this.CARD_DRAG.TARGET = a;
    }

    setDragTimer(a) {
        this.CARD_DRAG.TIMER = a;
    }

    setMenuOpen(a) {
        this.WINDOW.MENU_OPEN = a;
    }

    setMobileUser(a) {
        this.GAME.MOBILE_USER = a;
    }

    setToPileUsingMousePOS() {
        this.CARD_ACTION.TO_PILE = this.getAllPiles().find(pile => this.WINDOW.MOUSE_POS[0] >= pile.getLeft() &&
        this.WINDOW.MOUSE_POS[0] <= pile.getRight() &&
        this.WINDOW.MOUSE_POS[1] >= pile.getTop() &&
        this.WINDOW.MOUSE_POS[1] <= pile.getBottom());
    }

    setWinDetected(a) {
        this.GAME.WIN_DETECTED = a;
    }

    setWindowMousePOS(e) {
        this.WINDOW.MOUSE_POS = (e.type == 'mousemove' || e.type == 'mousedown' || e.type == 'mouseup') ?
        [e.clientX, e.clientY] :
            [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    }
}