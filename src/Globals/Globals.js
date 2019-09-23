import STATE from "../State/State";
import Pile from "../Pile/Pile";

const ALL_PILES = () => STATE.OBJECT_TREE.filter(obj => obj instanceof Pile);

const REFRESH_SCREEN = () => {
    //This routine will cycle through state objects and refresh their related objects.
    STATE.OBJECT_TREE.forEach(obj=>obj.refresh());
}

const CARD_CLICK_START = (e) => {
    //Click action to be handled here.
    console.log("Click event game selected");
}

const CARD_MOUSE_DOWN = (event) => {
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

    //Isolate Card
    const findCard = (a) => (a.classList.contains('card'))? a: findCard(a.parentElement);

    //Cycle through the STATE.OBJECT_TREE and identify the pile that contains the card.
    ALL_PILES().forEach(pile => {
        if(pile.cards.find(card => findCard(event.target).id === card.name)) STATE.CARD_DRAG_PILE = pile;
    })
    
    //Grab additional cards
    STATE.CARD_DRAG_CARDS = STATE.CARD_DRAG_PILE.selectCards(findCard(event.target));

    //Set card drag start POS 
    STATE.CARD_DRAG_CARDS.forEach(card => card.dragStartPOS = [card.getLeft(), card.getTop()]);

    //Shortcut if the drag pile is the stock
    if(STATE.CARD_DRAG_PILE.name === 'stock') CARD_DRAG_END();

}

const CARD_DRAG_END = () => {
    STATE.CARD_DROP_PILE = ALL_PILES().find(pile => STATE.WINDOW_MOUSE_POS[0] >= pile.getLeft() &&
    STATE.WINDOW_MOUSE_POS[0] <= pile.getRight() &&
    STATE.WINDOW_MOUSE_POS[1] >= pile.getTop() &&
    STATE.WINDOW_MOUSE_POS[1] <= pile.getBottom());

    if(STATE.CARD_DRAG_PILE.name === "stock"){
        STATE.CARD_DROP_PILE = ALL_PILES().find(pile => pile.name == 'talon');
        STATE.CARD_DRAG_PILE.cards[STATE.CARD_DRAG_PILE.cards.length-1].flip();
        STATE.CARD_DROP_PILE.addCards(STATE.CARD_DRAG_PILE.removeCards(STATE.CARD_DRAG_CARDS));
    } else if(STATE.CARD_DROP_PILE) {
        STATE.CARD_DROP_PILE.addCards(STATE.CARD_DRAG_PILE.removeCards(STATE.CARD_DRAG_CARDS));
    }

    //Drop all cards
    STATE.CARD_DRAG_CARDS.forEach(crd=>crd.drop());

    //Clear drop STATE
    STATE.CARD_DRAG_CARDS = false;
    STATE.CARD_DRAG_MOUSE_ORIG_POS = false;
    STATE.CARD_DRAG_PILE = false;
    STATE.CARD_DRAG_STATUS = false;
    STATE.CARD_DROP_PILE = false;
    REFRESH_SCREEN();
}

const DETECT_MOBILE_USER = () => {
    let result = false;
    ["Mobile","Phone","Pixel","Android","Opera Mini"].forEach(device=>{
        if(navigator.userAgent.includes(device))result = true;
    })
    STATE.GAME_MOBILE_USER = result;
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

    }
}

const WINDOW_MOUSE_UP = (event) => {
    STATE.WINDOW_MOUSE_POS = [event.clientX, event.clientY];

    if(STATE.CARD_DRAG_STATUS == true){
        CARD_DRAG_END(event);
    }
}

export {
    CARD_MOUSE_DOWN,
    DETECT_MOBILE_USER,
    WINDOW_MOUSE_UP,
    REFRESH_SCREEN,
    WINDOW_MOUSE_MOVE
};