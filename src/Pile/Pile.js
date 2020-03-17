import BaseClass from "../BaseClass/BaseClass";
import Card from "../Card/Card";
import './Pile.css';

export default class Pile extends BaseClass {
    constructor(parent, name) {
        super(name);
        this.parent = parent;
        this.cssClasses = ['topPile'];
        this.cards = [];
        this.aboveCardValue = this.aboveCardValue.bind(this);
        this.addCards = this.addCards.bind(this);
        this.cardCount = this.cardCount.bind(this);
        this.faceCards = this.faceCards.bind(this);
        this.hasCard = this.hasCard.bind(this);
        this.nonFaceCards = this.nonFaceCards.bind(this);
        this.refresh = this.refresh.bind(this);
        this.removeCards = this.removeCards.bind(this);
        this.selectCards = this.selectCards.bind(this);
        this.destruct = this.destruct.bind(this);
        this.topCard = this.topCard.bind(this);
    }

    aboveCardValue(myCard) {
        let i = this.cards.indexOf(myCard);
        if( i > 0){
            if(this.cards[i-1].face){
                return this.cards[i-1].value;
            }
        }
        return false;
    }
    
    addCards(cards) {
        cards.forEach(card => {this.cards.push(card)});
    }

    cardCount() {
        return this.cards.length;
    }

    destruct() {
        this.cards.forEach(crd => crd.destruct());
        this.destructor();
    }

    faceCards() {
        return (this.cardCount() > 0) ? this.cards.filter(crd => crd.face == true) : false; 
    }

    hasCard(cardName) {return (this.cards.find(crd=>crd.name == cardName)) ? true : false; }

    nonFaceCards() {
        if(this.cardCount() > 0) {
            let tempArray = this.cards.filter(crd => crd.face == false);
            if(tempArray.length > 0) {
                return tempArray;
            } else {
                return false;
            }
        }
    }

    topCard(){
        return (!!this.cards)?this.cards[this.cards.length-1]:false;
    }

    refresh() {
        this.cards.forEach(card => {
            card.setTop(this.element().offsetTop);
            card.setLeft(this.element().offsetLeft);
            card.setZIndex(this.cards.indexOf(card));
        })
    }
    
    removeCards(cards) {
        let tempCards = (cards instanceof Card)? [cards]: cards;
        let cardIndex = this.cards.findIndex(item => item.name === tempCards[0].name);
        return this.cards.splice(cardIndex, this.cards.length - cardIndex);
    }

    selectCards(currentCard){
        //Find index of current card
        let cardIndex = this.cards.findIndex(item => item.name === currentCard.id);
        return this.cards.slice(cardIndex, this.cards.length);
    }
}