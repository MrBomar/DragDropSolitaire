import Action from "../Action/Action";
import STATE from "../State/State";
import Pile from "../Pile/Pile";
import Deck from "../Deck/Deck";

const ALL_PILES = () => STATE.OBJECT_TREE.filter(obj => obj instanceof Pile);

//Isolate Card
const FIND_CARD = (a) => (a.classList.contains('card'))? a: FIND_CARD(a.parentElement);

const REFRESH_SCREEN = () => {
    //This routine will cycle through state objects and refresh their related objects.
    STATE.OBJECT_TREE.forEach(obj=>obj.refresh());
}

const CARD_AUTO_MOVE = (fromPile, targetCard, toPile, deal) => {
    //This function will move a card from one deck to another in an animated fashion.
    //Eventually this will need to be animated.
    //NEEDS FIXED

    //Identify the from pile.
    STATE.CARD_DRAG_PILE = fromPile;

    //Select cards from the pile.
    STATE.CARD_DRAG_CARDS = fromPile.selectCards(targetCard);

    //Identiy the to pile.
    STATE.CARD_DROP_PILE = toPile;

    //Create the move object and add it to the state.
    let tempMove = new Action.MoveCard();
    if(!deal) STATE.CARD_MOVE_HISTORY.push(tempMove);
}

const CARD_CLICK_START = (e) => {
    //Click action to be handled here.
    console.log("Click event game selected");
}

const CARD_MOUSE_DOWN = (event) => {
    //Double click detection
    if(STATE.CARD_MOUSE_DBL_CLICK && FIND_CARD(event.target) == STATE.CARD_MOUSE_DBL_CLICK_TARGET){
        //Insert here the actions desired for a double click.
        console.log('Double click has occured');
    } else {
        STATE.CARD_MOUSE_DBL_CLICK_TARGET = FIND_CARD(event.target);
        STATE.CARD_MOUSE_DBL_CLICK = setTimeout(()=>{
            STATE.CARD_MOUSE_DBL_CLICK = false;
            STATE.CARD_MOUSE_DBL_CLICK_TARGET = false;
        },300)
    }
    
    if(STATE.GAME_DRAG_OPTION) {
        CARD_DRAG_START(event);
    } else {
        CARD_CLICK_START(event);
    }
}

const CARD_DRAG_START = () => {
    //Capture cursor position
    STATE.CARD_DRAG_MOUSE_ORIG_POS = [event.clientX, event.clientY];

    //Update drag status
    STATE.CARD_DRAG_STATUS = true;

    //Cycle through the STATE.OBJECT_TREE and identify the pile that contains the card.
    ALL_PILES().forEach(pile => {
        if(pile.cards.find(card => FIND_CARD(event.target).id === card.name)) STATE.CARD_DRAG_PILE = pile;
    })
    
    //Grab additional cards
    STATE.CARD_DRAG_CARDS = STATE.CARD_DRAG_PILE.selectCards(FIND_CARD(event.target));

    //Set card drag start POS 
    STATE.CARD_DRAG_CARDS.forEach(card => card.dragStartPOS = [card.getLeft(), card.getTop()]);

    //Shortcut if the drag pile is the stock
    if(STATE.CARD_DRAG_PILE.name === 'stock') CARD_DRAG_END();

}

const CARD_DRAG_END = () => {

    //Identify drop pile my cursor POS on mouseup.
    STATE.CARD_DROP_PILE = ALL_PILES().find(pile => STATE.WINDOW_MOUSE_POS[0] >= pile.getLeft() &&
    STATE.WINDOW_MOUSE_POS[0] <= pile.getRight() &&
    STATE.WINDOW_MOUSE_POS[1] >= pile.getTop() &&
    STATE.WINDOW_MOUSE_POS[1] <= pile.getBottom());

    if(STATE.CARD_DRAG_PILE.name === "stock"){
        //Drop pile set in the state.
        STATE.CARD_DROP_PILE = ALL_PILES().find(pile => pile.name == 'talon');

        //Combined Move
        let combination = []
        
        //Top stock card is flipped
        STATE.CARD_DRAG_CARDS.forEach(card => combination.push(new Action.FlipCard(card)));

        //Create the move object and add it to the state.
        combination.push(new Action.MoveCard());

        //Add combination move to state history
        STATE.CARD_MOVE_HISTORY.push(new Action.CombinedMove(combination));

    //Methods to carry out if the mouse is over a pile on mouseup
    } else if(STATE.CARD_DROP_PILE) {

        //Action to carry out if the drop pile is anything other than Talon
        if(STATE.CARD_DROP_PILE.name != 'talon') {
            
            //Action to carry out if the move is valid.
            if(STATE.CARD_DROP_PILE.validateMove(STATE.CARD_DRAG_CARDS)){
                
                //Create the move object and add it to the state.
                STATE.CARD_MOVE_HISTORY.push(new Action.MoveCard());
            }
        };
    }

    // //Drop all cards
    // STATE.CARD_DRAG_CARDS.forEach(crd=>crd.drop());

    //Clear drop STATE
    STATE.CARD_DRAG_CARDS = false;
    STATE.CARD_DRAG_MOUSE_ORIG_POS = false;
    STATE.CARD_DRAG_PILE = false;
    STATE.CARD_DRAG_STATUS = false;
    STATE.CARD_DROP_PILE = false;
    REFRESH_SCREEN();
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
        let cardArray = fromPile.topCard();
        let toPile = STATE.OBJECT_TREE.find(pile => pile.name == item[0]);
        if(item[1]) cardArray.flip();
        CARD_AUTO_MOVE(fromPile, cardArray, toPile, false);
    });
}

const GAME_DEAL_RANDOM = () => {
    //Generates a random deck and places it into the stock.
    let target = STATE.OBJECT_TREE.find(item=> item.name === 'stock');
    let myDeck = new Deck;
    let myGame = STATE.OBJECT_TREE.find(item=> item.name == 'gameBoard');
    myDeck.random(target, myGame);

    //Create deck string
    let deckString = '';
    target.cards.forEach(item => {
        deckString += item.name;
        //console.log(item.name);
    })
    console.log(deckString);
    console.log(deckString.length);
    GAME_DEAL();
    //this.deal();
}

const GAME_DEAL_SOLVABLE = () => {
    
}

const DETECT_MOBILE_USER = () => {
    ["Mobile","Phone","Pixel","Android","Opera Mini"].forEach(device=>{
        STATE.GAME_MOBILE_USER = (navigator.userAgent.includes(device))? true: false;
    })
}

const PILE_STOCK_CLICK = (event) => {
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
    CARD_AUTO_MOVE,
    CARD_MOUSE_DOWN,
    DETECT_MOBILE_USER,
    GAME_DEAL_RANDOM,
    PILE_STOCK_CLICK,
    REFRESH_SCREEN,
    WINDOW_MOUSE_MOVE,
    WINDOW_MOUSE_UP,
};