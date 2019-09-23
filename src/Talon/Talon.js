import Pile from '../Pile/Pile';

export default class Talon extends Pile {
    constructor(parent, name){
        super(parent, name);
        this.render = this.render.bind(this);
        this.validateMove = this.validateMove.bind(this);
        this.render();
    }

    render() {
        let me = document.createElement('div');
        me.id = this.name;
        me.style.zIndex = 0;
        this.cssClasses.forEach(item => me.classList.add(item));
        this.parent.element().appendChild(me);
    }

    validateMove(aCard){
        console.log('Validate Move');
    }
}