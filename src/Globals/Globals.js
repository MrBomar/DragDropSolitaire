import Action from "../Action/Action";
import Deck from "../Deck/Deck";
import CardAction from "../CardMoves/CardAction";
import MoveCard from "../CardMoves/MoveCard";
import GameBoard from "../GameBoard/GameBoard";
import Foundation from "../Foundation/Foundation";
import { STATE } from "../index";

//Isolate Card
const FIND_CARD = (a) => {
    //return (a.classList.contains('card'))? a: FIND_CARD(a.parentElement)
    if(a.classList.contains('card')) {
        return a;
    } else {
        return FIND_CARD(a.parentElement);
    }
}

const GET_CARD_OBJECT = (a) => {
    return STATE.getAllPiles().find(pile => {
        return pile.cards.find(crd => crd.name == a.id);
    }).cards.find(crd => crd.name == a.id);
}

const REFRESH_SCREEN = () => {
    //This routine will cycle through state objects and refresh their related objects.
    STATE.GAME.OBJECT_TREE.forEach(obj=>obj.refresh());
}

const CARD_AUTO_MOVE = (fromPile, targetCard, toPile, deal) => {
    //This function will move a card from one deck to another in an animated fashion.
    //Eventually this will need to be animated.
    //NEEDS FIXED

    //Create the move object and add it to the state.
    let tempMove = new MoveCard(fromPile, fromPile.selectCards(targetCard), toPile);
    if(deal) STATE.addMoveToHistory(tempMove);
}

const CARD_MOUSE_DOWN = (event) => {
    //UPDATE STATE
    STATE.setCardMouseDown(true);

    //Capture mousedown target
    let targetCard = FIND_CARD(event.target);

    //Shortcut if mouse down is on stock.
    if(FIND_PILE_USING_CARD_DOM_ELEMENT(targetCard) == STATE.getStock()) {
        STATE.setActionTarget(targetCard);
        STATE.setActionMouseOrigPOS();
        CARD_DRAG_START();
        return CARD_DRAG_END();
    }

    //Double click detection
    if(STATE.CARD_DBL_CLICK.TIMER && targetCard == STATE.CARD_DBL_CLICK.TARGET) {
        STATE.setActionTarget(STATE.CARD_DBL_CLICK.TARGET);
        STATE.setDblClickTarget(false);
        CARD_DOUBLE_CLICK();
        STATE.setDblClickStatus(false);
    } else {

        //Starts double click timer - DO NOT ALTER
        STATE.setDblClickTarget(targetCard);
        STATE.setDblClickTimer(setTimeout(STATE.clearDblClickTimer(),300));

        //Starts drag timer
        STATE.setDragTarget(targetCard);
        STATE.setDragTimer(setTimeout(()=>{
            if(STATE.CARD_MOUSE.DOWN) {
                STATE.setDragStatus(true);
                STATE.setActionTarget(STATE.CARD_DRAG.TARGET);
                STATE.setDragTarget(false);
                CARD_DRAG_START();
            } else {
                STATE.setDragTarget(false);
            }
            STATE.clearDragTimer();
        }, 150));

        STATE.setActionMouseOrigPOS();
    }
}

const CARD_DRAG_START = () => {
    //New Method
    STATE.setActionFromPile(FIND_PILE_USING_CARD_DOM_ELEMENT(STATE.CARD_ACTION.TARGET));
    
    //Grab additional cards
    STATE.setActionCards(STATE.CARD_ACTION.FROM_PILE.selectCards(STATE.CARD_ACTION.TARGET));

    //Set card drag start POS 
    STATE.CARD_ACTION.CARDS.forEach(card => card.dragStartPOS = [card.getLeft(), card.getTop()]);
}

const CARD_DRAG_END = () => {
    STATE.setToPileUsingMousePOS();

    if(STATE.CARD_ACTION.FROM_PILE == STATE.getStock()) {
        STATE.setActionToPile(STATE.getTalon());
    };

    if(STATE.CARD_ACTION.TO_PILE) {
        new CardAction(STATE.CARD_ACTION.FROM_PILE, STATE.CARD_ACTION.CARDS, STATE.CARD_ACTION.TO_PILE);
    };

    //Drop all cards
    STATE.CARD_ACTION.CARDS.forEach(crd=>crd.drop());

    //Determine if player has won
    //FIX ME

    STATE.clearDropState();
    REFRESH_SCREEN();
}

const CARD_DOUBLE_CLICK = () => {
    //New Method
    STATE.setActionFromPile(FIND_PILE_USING_CARD_DOM_ELEMENT(STATE.CARD_ACTION.TARGET));

    //Capture card object
    STATE.setActionCards([GET_CARD_OBJECT(STATE.CARD_ACTION.TARGET)]);

    //Set card drag start POS 
    STATE.CARD_ACTION.CARDS.forEach(card => card.dragStartPOS = [card.getLeft(), card.getTop()]);

    //Shortcut if the drag pile is the stock
    if(STATE.CARD_ACTION.FROM_PILE == STATE.getStock()) {
        CARD_DRAG_END();
    } else {
        //Run GAME_CHECK_CARD_AGAINST_PILES
        let toPiles = STATE.getTableau().concat(STATE.getFoundations()).filter(i => STATE.CARD_ACTION.FROM_PILE != i);
        GAME_CHECK_CARD_AGAINST_PILES(STATE.CARD_ACTION.FROM_PILE,STATE.CARD_ACTION.CARDS[0],toPiles);
    }

    //Exit function
    return true;
}

const DETECT_MOBILE_USER = () => {
    ["Mobile","Phone","Pixel","Android","Opera Mini"].forEach(device => {
        STATE.setMobileUser((navigator.userAgent.includes(device))? true: false);
    })
}

const FIND_PILE_USING_CARD_DOM_ELEMENT = (cardElement) => {
    //Take cardElement and cycle through STATE.GAME.OBJECT_TREE to identify and return pile containing card.
    return STATE.getAllPiles().find(pile => pile.hasCard(cardElement.id));
}

const GAME_CARDS_REMAIN = () => {
    let activePiles = STATE.getAllPiles().filter(i => !(i instanceof Foundation)).filter(i => i.cards.length > 0);
    return (activePiles.length)? true: false;
}

const GAME_CHECK_CARD_AGAINST_PILES = (fromPile, myCard, myPiles) => {
    let myPilesTrimmed = myPiles.filter(pile=> pile != fromPile);
    let found = false;
    let i = 0;
    while (found == false && i < myPilesTrimmed.length) {
        if(myPilesTrimmed[i].validateMove(myCard)) {
            //Check fromPile aboveCardValue() against toPile topCard.value
            let redundancyCheck = fromPile.aboveCardValue(myCard);
            let valueCheck = (myPilesTrimmed[i].cardCount() > 0) ? redundancyCheck != myPilesTrimmed[i].topCard().value : true;
            if(redundancyCheck == false || valueCheck) {
                STATE.setActionToPile(myPilesTrimmed[i]);
                
                //FIX ME - Test Card Action - Not Working
                new CardAction(STATE.CARD_ACTION.FROM_PILE, STATE.CARD_ACTION.CARDS, STATE.CARD_ACTION.TO_PILE);
                found = true;   
            }
        }
        i++;
    }
    return found;
}

const GAME_FACEDOWN_CARDS_REMAIN = () => {
    let activePiles = STATE.getAllPiles().filter(i => !(i instanceof Foundation)).filter(i => i.nonFaceCards());
    return (activePiles.length)? true: false;
}

const GAME_DEAL = () => {
    //This function moves the card from stock to the tableau piles.
    let fromPile = STATE.getStock();

    //Deal order
    let dealOrder = [
        ['tableau1',true],['tableau2',false],['tableau3',false],['tableau4',false],['tableau5',false],['tableau6',false],['tableau7',false],
        ['tableau2',true],['tableau3',false],['tableau4',false],['tableau5',false],['tableau6',false],['tableau7',false],
        ['tableau3',true],['tableau4',false],['tableau5',false],['tableau6',false],['tableau7',false],
        ['tableau4',true],['tableau5',false],['tableau6',false],['tableau7',false],
        ['tableau5',true],['tableau6',false],['tableau7',false],
        ['tableau6',true],['tableau7',false],
        ['tableau7',true]
    ];

    //Iterate through the deal order and perform the card moves.
    dealOrder.forEach(item => {
        let cardArray = [fromPile.topCard()];
        let toPile = STATE.GAME.OBJECT_TREE.find(pile => pile.name == item[0]);
        if(item[1]) cardArray[0].flip();
        CARD_AUTO_MOVE(fromPile, cardArray, toPile, false);
    });
}

const GAME_DEAL_RANDOM = () => {
    GAME_NEW_GAME();

    //Generates a random deck and places it into the stock.
    let myDeck = new Deck;
    myDeck.random(STATE.getStock(), STATE.getGameBoard());

    STATE.setDeckString();
    GAME_DEAL();
}

const GAME_DEAL_SOLVABLE = () => {
    //New Game
    GAME_NEW_GAME();

    //FIX ME - Replace with function to grab solvable deck from server
    //Solvable String
    STATE.GAME.DECK_STRING = "ADJACBASLADLACJACAACKADCASFAHHAHJADGADAASAASMADEADDACDAHBAHMAHIAHCAHFASIACEADKACIACMAHAADMASCAHDASBADHACFAHEACGADBASKASDASHAHKACCAHGACHASGADIADFASJAHLASEACL";

    //Build Deck
    let myDeck = new Deck;
    myDeck.reconstituteDeck(STATE.GAME.DECK_STRING);

    //Deal the cards
    GAME_DEAL();
    Action.ToggleMenu();
}

const GAME_NEW_GAME = () => {
    //Create new object tree
    STATE.reset();

    //Build new GameBoard
    STATE.addToObjectTree(new GameBoard);
}

const PILE_STOCK_CLICK = () => {
    let stock = STATE.getStock();
    let talon = STATE.getTalon();

    talon.cards.reverse();
    talon.cards.forEach(card => {
        card.flip();
        stock.cards.push(card)
    });
    talon.cards = [];

    REFRESH_SCREEN();
}

const WINDOW_MOUSE_MOVE = (e) => {
    //Update STATE with Mouse Position
    STATE.setWindowMousePOS(e);
    
    //Action if drag status is true
    if(STATE.CARD_MOUSE.DOWN) {
        STATE.setDragStatus(true);

        //Set the margin
        let margins = [
            STATE.WINDOW.MOUSE_POS[0]-STATE.CARD_ACTION.MOUSE_ORIG_POS[0],
            STATE.WINDOW.MOUSE_POS[1]-STATE.CARD_ACTION.MOUSE_ORIG_POS[1]
        ]

        //Drag the cards
        STATE.CARD_ACTION.CARDS.forEach(card => card.drag(margins));
    }
    //Action if drag status is false
    else {

        //Activate menu when mouseover left margin
        if(!STATE.WINDOW.MENU_OPEN && STATE.WINDOW.MOUSE_POS[0] < 25) {
            Action.ToggleMenu();
        }
    }
}

const WINDOW_MOUSE_UP = (e) => {
    //UPDATE STATE
    STATE.setCardMouseDown(false);
    STATE.clearDragTimer();
    STATE.setDragTarget(false);
    STATE.setWindowMousePOS(e);

    if(STATE.CARD_DRAG.STATUS == true){
        CARD_DRAG_END(e);
    }
}

export {
    CARD_AUTO_MOVE,
    CARD_MOUSE_DOWN,
    DETECT_MOBILE_USER,
    GAME_CARDS_REMAIN,
    GAME_CHECK_CARD_AGAINST_PILES,
    GAME_DEAL_RANDOM,
    GAME_DEAL_SOLVABLE,
    GAME_FACEDOWN_CARDS_REMAIN,
    PILE_STOCK_CLICK,
    REFRESH_SCREEN,
    WINDOW_MOUSE_MOVE,
    WINDOW_MOUSE_UP,
};