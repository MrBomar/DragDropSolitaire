import '../MenuButton/MenuButton.css';
import BaseClass from '../BaseClass/BaseClass';

export default class MenuButton extends BaseClass{
    constructor(text, action) {
        super('testingButton');
        this.text = text;
        this.action = action;
        this.object;
        this.build = this.build.bind(this);
    }

    build(){
        this.object = document.createElement('h1');
        this.object.classList.add('MenuButton');
        this.object.innerText = this.text;
        this.object.onclick = this.action;
        return this.object;
    }

    object(){
        this.object;
    }
}