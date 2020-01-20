import '../MenuButton/MenuButton.css';

export default class MenuButton {
    constructor(text, action){
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