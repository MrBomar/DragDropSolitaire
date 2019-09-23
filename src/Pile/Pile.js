import './Pile.css';

class Pile {
    constructor(parent, name) {
        this.parent = parent;
        this.name = name;
        this.cssClasses = ['pile'];
        this.cards = [];
        this.addCards = this.addCards.bind(this);
        this.element = this.element.bind(this);
        this.getBottom = this.getBottom.bind(this);
        this.getHeight = this.getHeight.bind(this);
        this.getLeft = this.getLeft.bind(this);
        this.getRight = this.getRight.bind(this);
        this.getTop = this.getTop.bind(this);
        this.getWidth = this.getWidth.bind(this);
        this.render = this.render.bind(this);
        this.refresh = this.refresh.bind(this);
        this.removeCards = this.removeCards.bind(this);
        this.selectCards = this.selectCards.bind(this);
        this.render();
    }
    
    addCards(cards) {
        this.cards = this.cards.concat(cards);
    }

    element() {
        return document.getElementById(this.name);
    }

    getBottom() {return this.getTop() + this.element().offsetHeight};
    getHeight() {return this.element().offsetHeight};
    getLeft() {return this.element().offsetLeft};
    getRight() {return this.getLeft() + this.element().offsetWidth};
    getTop() {return this.element().offsetTop};
    getWidth() {return this.element().offsetWidth};

    render() {
        let me = document.createElement('div');
        me.id = this.name;
        me.style.zIndex = 0;
        this.cssClasses.forEach(item => me.classList.add(item));
        this.parent.element().appendChild(me);
    }

    refresh() {
        this.cards.forEach(card => {
            card.setTop(this.element().offsetTop);
            card.setLeft(this.element().offsetLeft);
        })
    }

    selectCards(currentCard){
        //Find index of current card
        let cardIndex = this.cards.findIndex(item => item.name === currentCard.id);
        return this.cards.slice(cardIndex, this.cards.length);
    }
    
    removeCards(cards){
        let cardIndex = this.cards.findIndex(item => item.name === cards[0].name);
        return this.cards.splice(cardIndex, this.cards.length - cardIndex);
    }
}

export default Pile;