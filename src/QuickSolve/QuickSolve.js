import Foundation from "../Foundation/Foundation";
import { STATE } from "../index";
import "./QuickSolve.css";
import Talon from "../Talon/Talon";
import Tableau from "../Tableau/Tableau";
import Stock from "../Stock/Stock";
import {GAME_FACEDOWN_CARDS_REMAIN, PILE_STOCK_CLICK, CARD_MOUSE_DOWN, GAME_CARDS_REMAIN, GAME_CHECK_CARD_AGAINST_PILES} from "../Globals/Globals";

export default class QuickSolve{
    constructor(parent){
        this.solve = this.solve.bind(this);
        this.name = "quickSolve";
        this.clickEvents = [
            {
                trigger: "click",
                action: this.solve
            }
        ];
        this.parent = parent;
        this.solveTimer = false;
        this.checkTableauBottomCards = this.checkTableauBottomCards.bind(this);
        this.checkTableauTopCards = this.checkTableauTopCards.bind(this);
        this.destruct = this.destruct.bind(this);
        this.element = this.element.bind(this);
        this.getFoundations = this.getFoundations.bind(this);
        this.getStock = this.getStock.bind(this);
        this.getTalon = this.getTalon.bind(this);
        this.getTableau = this.getTableau.bind(this);
        this.refresh = this.refresh.bind(this);
        this.render = this.render.bind(this);
        this.showHide = this.showHide.bind(this);
        this.solve = this.solve.bind(this);
        this.render();
    }

    element() { return document.getElementById(this.name)}

    destruct() {
        this.clickEvents.forEach(item=>{this.element().removeEventListener(item.trigger, item.action)});
        this.element().remove();
    }

    getFoundations() {
        return STATE.GAME.OBJECT_TREE.filter(pile=>pile instanceof Foundation);
    }

    getStock() {
        return STATE.GAME.OBJECT_TREE.find(pile=>pile instanceof Stock);
    }

    getTalon() {
        return STATE.GAME.OBJECT_TREE.find(pile=>pile instanceof Talon);
    }

    getTableau() {
        return STATE.GAME.OBJECT_TREE.filter(pile=>pile instanceof Tableau);
    }

    refresh() {
        this.showHide();
    }

    render() {
        let me = document.createElement('button');
        me.id = this.name;
        me.innerText = "Quick Solve";
        this.parent.element().appendChild(me);
        this.clickEvents.forEach(item=>{this.element().addEventListener(item.trigger, item.action)});
        this.showHide();
    }

    solve () {
        this.solveTimer = setInterval(() => {
            if(GAME_CARDS_REMAIN()) {        
                //Master Action
                if(!this.checkTableauTopCards()) { //Check the Tableau topCard();
                    if(!this.checkTableauBottomCards()) { //Check the Tableau bottomCard;
                        if(!this.checkTalon()) { //Check the Talon topCard();
                            let stockPile = this.getStock();
                            if(stockPile.cardCount() > 0){
                                let targetCard = stockPile.topCard().element();
                                let event = {target:targetCard}
                                CARD_MOUSE_DOWN(event);
                            } else {
                                PILE_STOCK_CLICK();
                            }
                        }
                    }
                }
            } else {
                this.solveTimer = false;
            }
        }, 100);
    }

    checkTableauBottomCards() {
        let toPiles = STATE.GAME.OBJECT_TREE.filter(pile=>pile instanceof Tableau);
        let tempFromPiles = STATE.GAME.OBJECT_TREE.filter(pile => pile instanceof Tableau && pile.cardCount() > 0);
        let fromPiles = tempFromPiles.filter(pile => {
            if(pile.faceCards()) {
                if(pile.faceCards()[0].value == "M" && pile.nonFaceCards() == false){
                    return false;
                } else {
                    return true;
                }
            }
        })
        let found = false;
        let i = 0;
        while (found == false && i < fromPiles.length) {
            STATE.CARD_ACTION_FROM_PILE = fromPiles[i];
            STATE.CARD_ACTION_CARDS = fromPiles[i].faceCards();
            if(GAME_CHECK_CARD_AGAINST_PILES(STATE.CARD_ACTION_FROM_PILE, STATE.CARD_ACTION_CARDS[0], toPiles)){
                found = true;
            };
            i++;
        }
        return found;
    }

    checkTableauTopCards() {
        //Create toPiles and fromPiles array
        let toPiles = (GAME_FACEDOWN_CARDS_REMAIN()) ? STATE.GAME.OBJECT_TREE.filter(pile=> pile instanceof Tableau || pile instanceof Foundation) : STATE.GAME.OBJECT_TREE.filter(pile=> pile instanceof Foundation);
        let fromPiles = STATE.GAME.OBJECT_TREE.filter(pile => pile instanceof Tableau && pile.cardCount() > 0);
        let tempFromPiles = fromPiles.filter(pile => {
            if(pile.topCard().value == "M" && !pile.nonFaceCards() && GAME_FACEDOWN_CARDS_REMAIN()) {
                return false;
            } else {
                return true;
            }
        })
        let found = false;
        let i = 0;
        while (found == false && i < tempFromPiles.length) {
            STATE.CARD_ACTION_FROM_PILE = tempFromPiles[i];
            STATE.CARD_ACTION_CARDS = [tempFromPiles[i].topCard()];
            if(GAME_CHECK_CARD_AGAINST_PILES(STATE.CARD_ACTION_FROM_PILE, STATE.CARD_ACTION_CARDS[0], toPiles)){
                found = true;
            };
            i++;
        }
        return found;
    }

    checkTalon() {
        STATE.CARD_ACTION_CARDS = STATE.GAME.OBJECT_TREE.find(pile => pile instanceof Talon);
        if(STATE.CARD_ACTION_CARDS.cardCount()) {
            let toPiles = STATE.GAME.OBJECT_TREE.filter(pile=> pile instanceof Tableau || pile instanceof Foundation);
            STATE.CARD_ACTION_CARDS = [STATE.CARD_ACTION_CARDS.topCard()];
            return (GAME_CHECK_CARD_AGAINST_PILES(STATE.CARD_ACTION_CARDS, STATE.CARD_ACTION_CARDS, toPiles));
        }
        return false;
    }

    showHide() {
        if(STATE.GAME_WIN_DETECTED) {
            this.element().classList.remove("hide");
        } else {
            this.element().classList.add("hide");
        }
    }
}