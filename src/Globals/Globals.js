import Action from "../Action/Action";
import Pile from "../Pile/Pile";
import Deck from "../Deck/Deck";
import CardAction from "../CardMoves/CardAction";
import MoveCard from "../CardMoves/MoveCard";
import GameBoard from "../GameBoard/GameBoard";
import Foundation from "../Foundation/Foundation";
import { STATE } from "../index";
import Tableau from "../Tableau/Tableau";

const ALL_PILES = () => STATE.OBJECT_TREE.filter(obj => obj instanceof Pile);

//Isolate Card
const FIND_CARD = (a) => (a.classList.contains('card'))? a: FIND_CARD(a.parentElement);

const GET_CARD_OBJECT = (a) => {
    let cardName = a.id;
    let allCards = [];
    ALL_PILES().forEach(pile => {
        allCards = allCards.concat(pile.cards);
    })
    return allCards.find(crd => crd.name = cardName);
}

const REFRESH_SCREEN = () => {
    //This routine will cycle through state objects and refresh their related objects.
    STATE.OBJECT_TREE.forEach(obj=>obj.refresh());
}

const CARD_AUTO_MOVE = (fromPile, targetCard, toPile, deal) => {
    //This function will move a card from one deck to another in an animated fashion.
    //Eventually this will need to be animated.
    //NEEDS FIXED

    //Create the move object and add it to the state.
    let tempMove = new MoveCard(fromPile, fromPile.selectCards(targetCard), toPile);
    if(deal) STATE.CARD_MOVE_HISTORY.push(tempMove);
}

const CARD_CLICK_START = (e) => {
    //Click action to be handled here.
}

const CARD_MOUSE_DOWN = (event) => {
    //Double click detection
    if(STATE.CARD_MOUSE_DBL_CLICK && FIND_CARD(event.target) == STATE.CARD_MOUSE_DBL_CLICK_TARGET){
        //Insert here the actions desired for a double click.
        
        console.log("Double Click");

        //Clear 
    
        //Initiate drag start
        CARD_DRAG_START(event);

        //Capture card object
        let cardElement = FIND_CARD(event.target);
        let cardObject = GET_CARD_OBJECT(cardElement);

        //Run GAME_CHECK_CARD_AGAINST_PILES
        let toPiles = STATE.OBJECT_TREE.filter(pile => pile instanceof Tableau || pile instanceof Foundation);
        GAME_CHECK_CARD_AGAINST_PILES(STATE.CARD_DRAG_PILE,cardObject,toPiles);

        //Exit function
        return true;

    } else {

        //Starts double click timer - DO NOT ALTER
        STATE.CARD_MOUSE_DBL_CLICK_TARGET = FIND_CARD(event.target);
        STATE.CARD_MOUSE_DBL_CLICK = setTimeout(()=>{
            STATE.CARD_MOUSE_DBL_CLICK = false;
            STATE.CARD_MOUSE_DBL_CLICK_TARGET = false;
            console.log("Timer Expired");
        },300)
    }
    
    if(STATE.GAME_DRAG_OPTION) {
        //Capture cursor position
        STATE.CARD_DRAG_MOUSE_ORIG_POS = [event.clientX, event.clientY];

        //Update drag status
        STATE.CARD_DRAG_STATUS = true;
        
        //Initiate drag start
        CARD_DRAG_START(event);
    } else {
        CARD_CLICK_START(event);
    }
}

const CARD_DRAG_START = (event) => {
    console.log("CARD_DRAG_START initiated");
    //Isolate the card DOM element
    let cardElement = FIND_CARD(event.target);

    //New Method
    STATE.CARD_DRAG_PILE = FIND_PILE_USING_CARD_DOM_ELEMENT( cardElement ); //Works
    
    //Grab additional cards
    STATE.CARD_DRAG_CARDS = STATE.CARD_DRAG_PILE.selectCards( cardElement ); //Works

    //Set card drag start POS 
    STATE.CARD_DRAG_CARDS.forEach(card => card.dragStartPOS = [card.getLeft(), card.getTop()]);

    //Shortcut if the drag pile is the stock
    if(STATE.CARD_DRAG_PILE.name === 'stock') CARD_DRAG_END();

    console.log(STATE);
}

const CARD_DRAG_END = () => {
    console.log("CARD_DRAG_END initiated");

    //Identify drop pile my cursor POS on mouseup.
    STATE.CARD_DROP_PILE = ALL_PILES().find(pile => STATE.WINDOW_MOUSE_POS[0] >= pile.getLeft() &&
    STATE.WINDOW_MOUSE_POS[0] <= pile.getRight() &&
    STATE.WINDOW_MOUSE_POS[1] >= pile.getTop() &&
    STATE.WINDOW_MOUSE_POS[1] <= pile.getBottom());

    if(STATE.CARD_DRAG_PILE.name === "stock") STATE.CARD_DROP_PILE = ALL_PILES().find(pile => pile.name == 'talon');

    if(STATE.CARD_DROP_PILE) new CardAction(STATE.CARD_DRAG_PILE, STATE.CARD_DRAG_CARDS, STATE.CARD_DROP_PILE);

    //Drop all cards
    STATE.CARD_DRAG_CARDS.forEach(crd=>crd.drop());

    //Determine if play has won

    //Clear drop STATE
    STATE.CARD_DRAG_CARDS = false;
    STATE.CARD_DRAG_MOUSE_ORIG_POS = false;
    STATE.CARD_DRAG_PILE = false;
    STATE.CARD_DRAG_STATUS = false;
    STATE.CARD_DROP_PILE = false;
    REFRESH_SCREEN();
}

const FIND_PILE_USING_CARD_DOM_ELEMENT = (cardElement) => {
    //Take cardElement and cycle through STATE.OBJECT_TREE to identify and return pile containing card.
    return ALL_PILES().find(pile => pile.hasCard(cardElement.id));
}

const GAME_CARDS_REMAIN = () => {
    let activePiles = STATE.OBJECT_TREE.filter(pile => !(pile instanceof Foundation) && (pile instanceof Pile));
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
                STATE.CARD_DROP_PILE = myPilesTrimmed[i];
                new CardAction(STATE.CARD_DRAG_PILE, STATE.CARD_DRAG_CARDS, STATE.CARD_DROP_PILE);
                found = true;   
            }
        }
        i++;
    }
    return found;
}

const GAME_FACEDOWN_CARDS_REMAIN = () => {
    let activePiles = STATE.OBJECT_TREE.filter(pile => !(pile instanceof Foundation) && (pile instanceof Pile));
    let pilesWithCards = activePiles.filter(pile => pile.nonFaceCards());
    return (pilesWithCards.length)? true: false;
}

const GAME_DEAL = () => {
    //This function moves the card from stock to the tableau piles.
    let fromPile = STATE.OBJECT_TREE.find(pile => pile.name == 'stock');

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
        let toPile = STATE.OBJECT_TREE.find(pile => pile.name == item[0]);
        if(item[1]) cardArray[0].flip();
        CARD_AUTO_MOVE(fromPile, cardArray, toPile, false);
    });
}

const GAME_DEAL_RANDOM = () => {
    //New game
    GAME_NEW_GAME();

    //Generates a random deck and places it into the stock.
    let target = STATE.OBJECT_TREE.find(item=> item.name === 'stock');
    let myDeck = new Deck;
    let myGame = STATE.OBJECT_TREE.find(item=> item.name == 'gameBoard');
    myDeck.random(target, myGame);

    //Create deck string
    let deckString = '';
    target.cards.forEach(item => {
        deckString += item.name;
    })
    console.log(deckString);
    STATE.GAME_CARDS_STRING = deckString;
    GAME_DEAL();
}

const GAME_DEAL_SOLVABLE = () => {
    //New Game
    GAME_NEW_GAME();

    //Solvable String
    STATE.GAME_CARDS_STRING = "ADJACBASLADLACJACAACKADCASFAHHAHJADGADAASAASMADEADDACDAHBAHMAHIAHCAHFASIACEADKACIACMAHAADMASCAHDASBADHACFAHEACGADBASKASDASHAHKACCAHGACHASGADIADFASJAHLASEACL";

    //Build Deck
    let myDeck = new Deck;
    myDeck.reconstituteDeck(STATE.GAME_CARDS_STRING);

    //Deal the cards
    GAME_DEAL();
}

const GAME_NEW_GAME = () => {
    //Create new object tree
    STATE.reset();

    //Build new GameBoard
    STATE.OBJECT_TREE.push(new GameBoard);
}

const DETECT_MOBILE_USER = () => {
    ["Mobile","Phone","Pixel","Android","Opera Mini"].forEach(device=> {
        STATE.GAME_MOBILE_USER = (navigator.userAgent.includes(device))? true: false;
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

const WINDOW_MOUSE_MOVE = (event) => {
    STATE.WINDOW_MOUSE_POS = [event.clientX,event.clientY];

//Action if drag status is true
    if(STATE.CARD_DRAG_STATUS != false){

        //Set the margin
        let margins = [
            STATE.WINDOW_MOUSE_POS[0]-STATE.CARD_DRAG_MOUSE_ORIG_POS[0],
            STATE.WINDOW_MOUSE_POS[1]-STATE.CARD_DRAG_MOUSE_ORIG_POS[1]
        ]

        //Drag the cards
        STATE.CARD_DRAG_CARDS.forEach(card => card.drag(margins));
    }
//Action if drag status is false
    else {

        //Activate menu when mouseover left margin
        if(!STATE.WINDOW_MENU_OPEN && STATE.WINDOW_MOUSE_POS[0] < 25) {
            Action.ToggleMenu();
        }
    }
}

const WINDOW_MOUSE_UP = (event) => {
    STATE.WINDOW_MOUSE_POS = [event.clientX, event.clientY];

    if(STATE.CARD_DRAG_STATUS == true){
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