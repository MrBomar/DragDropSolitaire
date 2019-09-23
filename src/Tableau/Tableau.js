import Pile from '../Pile/Pile';
import './Tableau.css';

export default class Tableau extends Pile {
    constructor(parent, name) {
        super(parent, name);
        this.cssClasses = ['tableau'];
        this.limit = name.charAt(name.length-1);
        this.refresh = this.refresh.bind(this);
        this.render = this.render.bind(this);
        this.render();
    }

    refresh() {
        if(this.cards.length){
            let marginTotal = 0;
            this.cards.forEach(card => {
                card.setTop(this.element().offsetTop + marginTotal);
                let baseMargin = card.getHeight() / 4;
                marginTotal = (card.face)? marginTotal + baseMargin : marginTotal + baseMargin / 2;
                card.setLeft(this.getLeft());
                card.setZIndex(this.cards.indexOf(card));
            })
        }
    }

    render() {
        let me = document.createElement('div');
        me.id = this.name;
        me.style.zIndex = 0;
        this.cssClasses.forEach(item => me.classList.add(item));
        this.parent.element().appendChild(me);
    }

}