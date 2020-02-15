import Action from "../Action/Action";
import Pile from "../Pile/Pile";
import Deck from "../Deck/Deck";
import CardAction from "../CardMoves/CardAction";
import MoveCard from "../CardMoves/MoveCard";
import GameBoard from "../GameBoard/GameBoard";
import Foundation from "../Foundation/Foundation";
import { STATE } from "../index";
import Tableau from "../Tableau/Tableau";

const ALL_PILES = () => STATE.GAME.OBJECT_TREE.filter(obj => obj instanceof Pile);

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
    return ALL_PILES().find(pile => {
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
    if(deal) STATE.GAME.MOVE_HISTORY.push(tempMove);
}

const CARD_MOUSE_DOWN = (event) => {
    //Added to prevent double firing of event.
    event.preventDefault();
    
    //UPDATE STATE
    STATE.CARD_MOUSE.DOWN = true;

    //Capture mousedown target
    let targetCard = FIND_CARD(event.target);

    //Shortcut if mouse down is on stock.
    if(FIND_PILE_USING_CARD_DOM_ELEMENT(FIND_CARD(event.target)).name === 'stock') {
        STATE.CARD_ACTION.TARGET = targetCard;
        STATE.CARD_ACTION.MOUSE_ORIG_POS = WINDOW_CURRENT_POINTER_POS(event);
        CARD_DRAG_START();
        return CARD_DRAG_END();
    }

    //Double click detection
    if(STATE.CARD_DBL_CLICK.TIMER && targetCard == STATE.CARD_DBL_CLICK.TARGET){
        STATE.CARD_ACTION.TARGET = STATE.CARD_DBL_CLICK.TARGET;
        STATE.CARD_DBL_CLICK.TARGET = false;
        CARD_DOUBLE_CLICK();
        STATE.CARD_DBL_CLICK.STATUS = false;
    } else {

        //Starts double click timer - DO NOT ALTER
        STATE.CARD_DBL_CLICK.TARGET = targetCard;
        STATE.CARD_DBL_CLICK.TIMER = setTimeout(()=>{
            clearTimeout(STATE.CARD_DBL_CLICK.TIMER);
            STATE.CARD_DBL_CLICK.TIMER = false;
        },300)

        //Starts drag timer
        STATE.CARD_DRAG.TARGET = targetCard;
        STATE.CARD_DRAG.TIMER = setTimeout(()=>{
            if(STATE.CARD_MOUSE.DOWN) {
                STATE.CARD_DRAG.STATUS = true;
                STATE.CARD_ACTION.TARGET = STATE.CARD_DRAG.TARGET;
                STATE.CARD_DRAG.TARGET = false;
                CARD_DRAG_START();
            } else {
                STATE.CARD_DRAG.TARGET = false;
            }
            clearTimeout(STATE.CARD_DRAG.TIMER);
            STATE.CARD_DRAG.TIMER = false;
        }, 150)

        STATE.CARD_ACTION.MOUSE_ORIG_POS = WINDOW_CURRENT_POINTER_POS(event);
    }
}

const CARD_DRAG_START = () => {
    //New Method
    STATE.CARD_ACTION.FROM_PILE = FIND_PILE_USING_CARD_DOM_ELEMENT( STATE.CARD_ACTION.TARGET ); //Works
    
    //Grab additional cards
    STATE.CARD_ACTION.CARDS = STATE.CARD_ACTION.FROM_PILE.selectCards( STATE.CARD_ACTION.TARGET ); //Works

    //Set card drag start POS 
    STATE.CARD_ACTION.CARDS.forEach(card => card.dragStartPOS = [card.getLeft(), card.getTop()]);
}

const CARD_DRAG_END = () => {
    //Identify drop pile my cursor POS on mouseup.
    STATE.CARD_ACTION.TO_PILE = ALL_PILES().find(pile => STATE.WINDOW.MOUSE_POS[0] >= pile.getLeft() &&
    STATE.WINDOW.MOUSE_POS[0] <= pile.getRight() &&
    STATE.WINDOW.MOUSE_POS[1] >= pile.getTop() &&
    STATE.WINDOW.MOUSE_POS[1] <= pile.getBottom());

    if(STATE.CARD_ACTION.FROM_PILE.name === "stock") {
        STATE.CARD_ACTION.TO_PILE = ALL_PILES().find(pile => pile.name == 'talon');
    };

    if(STATE.CARD_ACTION.TO_PILE) {
        new CardAction(STATE.CARD_ACTION.FROM_PILE, STATE.CARD_ACTION.CARDS, STATE.CARD_ACTION.TO_PILE);
    };

    //Drop all cards
    STATE.CARD_ACTION.CARDS.forEach(crd=>crd.drop());

    //Determine if player has won
    //FIX ME

    //Clear drop STATE
    STATE.CARD_ACTION.CARDS = [];
    STATE.CARD_ACTION.MOUSE_ORIG_POS = false;
    STATE.CARD_ACTION.FROM_PILE = false;
    STATE.CARD_DRAG.STATUS = false;
    STATE.CARD_ACTION.TO_PILE = false;
    REFRESH_SCREEN();
}

const CARD_DOUBLE_CLICK = () => {
    //New Method
    STATE.CARD_ACTION.FROM_PILE = FIND_PILE_USING_CARD_DOM_ELEMENT( STATE.CARD_ACTION.TARGET ); //Works

    //Capture card object
    STATE.CARD_ACTION.CARDS = [GET_CARD_OBJECT(STATE.CARD_ACTION.TARGET)];

    //Set card drag start POS 
    STATE.CARD_ACTION.CARDS.forEach(card => card.dragStartPOS = [card.getLeft(), card.getTop()]);

    //Shortcut if the drag pile is the stock
    if(STATE.CARD_ACTION.FROM_PILE.name === 'stock') {
        CARD_DRAG_END();
    } else {
        //Run GAME_CHECK_CARD_AGAINST_PILES
        let toPiles = STATE.GAME.OBJECT_TREE.filter(pile => pile instanceof Tableau || pile instanceof Foundation).filter(pile => STATE.CARD_ACTION.FROM_PILE != pile);
        GAME_CHECK_CARD_AGAINST_PILES(STATE.CARD_ACTION.FROM_PILE,STATE.CARD_ACTION.CARDS[0],toPiles);
    }

    //Exit function
    return true;
}

const FIND_PILE_USING_CARD_DOM_ELEMENT = (cardElement) => {
    //Take cardElement and cycle through STATE.GAME.OBJECT_TREE to identify and return pile containing card.
    return ALL_PILES().find(pile => pile.hasCard(cardElement.id));
}

const GAME_CARDS_REMAIN = () => {
    let activePiles = STATE.GAME.OBJECT_TREE.filter(pile => !(pile instanceof Foundation) && (pile instanceof Pile));
    let pilesWithCards = activePiles.filter(pile => pile.cards.length > 0);
    return (pilesWithCards.length)? true: false;
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
                STATE.CARD_ACTION.TO_PILE = myPilesTrimmed[i];
                
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
    let activePiles = STATE.GAME.OBJECT_TREE.filter(pile => !(pile instanceof Foundation) && (pile instanceof Pile));
    let pilesWithCards = activePiles.filter(pile => pile.nonFaceCards());
    return (pilesWithCards.length)? true: false;
}

const GAME_DEAL = () => {
    //This function moves the card from stock to the tableau piles.
    let fromPile = STATE.GAME.OBJECT_TREE.find(pile => pile.name == 'stock');

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
    //New game
    GAME_NEW_GAME();

    //Generates a random deck and places it into the stock.
    let target = STATE.GAME.OBJECT_TREE.find(item=> item.name === 'stock');
    let myDeck = new Deck;
    let myGame = STATE.GAME.OBJECT_TREE.find(item=> item.name == 'gameBoard');
    myDeck.random(target, myGame);

    //Create deck string
    let deckString = '';
    target.cards.forEach(item => {
        deckString += item.name;
    })
    STATE.GAME.DECK_STRING = deckString;
    GAME_DEAL();
}

const GAME_DEAL_SOLVABLE = () => {
    //New Game
    GAME_NEW_GAME();

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
    STATE.GAME.OBJECT_TREE.push(new GameBoard);
}

const DETECT_MOBILE_USER = () => {
    ["Mobile","Phone","Pixel","Android","Opera Mini"].forEach(device=> {
        STATE.GAME.MOBILE_USER = (navigator.userAgent.includes(device))? true: false;
    })
}

const PILE_STOCK_CLICK = () => {
    let stock = ALL_PILES().find(item => item.name == 'stock');
    let talon = ALL_PILES().find(item => item.name == 'talon');

    talon.cards.reverse();
    talon.cards.forEach(card => {
        card.flip();
        stock.cards.push(card)
    });
    talon.cards = [];

    REFRESH_SCREEN();
}

const WINDOW_CURRENT_POINTER_POS = (e) => {
    return (e.type == 'mousemove' || e.type == 'mousedown' || e.type == 'mouseup') ?
    [e.clientX, e.clientY] :
        [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
}

const WINDOW_MOUSE_MOVE = (event) => {
    //Update STATE with Mouse Position
    STATE.WINDOW.MOUSE_POS = WINDOW_CURRENT_POINTER_POS(event);
    
    //Action if drag status is true
    if(STATE.CARD_MOUSE.DOWN){
        STATE.CARD_DRAG.STATUS = true;

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

const WINDOW_MOUSE_UP = (event) => {
    //UPDATE STATE
    STATE.CARD_MOUSE.DOWN = false;
    clearTimeout(STATE.CARD_DRAG.TIMER);
    STATE.CARD_DRAG.TIMER = false;
    STATE.CARD_DRAG.TARGET = false;
    STATE.WINDOW.MOUSE_POS = WINDOW_CURRENT_POINTER_POS(event);

    if(STATE.CARD_DRAG.STATUS == true){
        CARD_DRAG_END(event);
    }
}

export {
    ALL_PILES,
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