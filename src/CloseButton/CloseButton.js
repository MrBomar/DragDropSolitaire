import '../CloseButton/CloseButton.css';

export default class CloseButton {
    constructor(action){
        this.action = action;
        this.object;
        this.build = this.build.bind(this);
    }

    build(){
        this.object = document.createElement('div');
        this.object.classList.add('CloseButton');
        let button = `<h1>x</h1>`;
        this.object.innerHTML = button;
        // this.button = document.createElement('h1');
        // this.button.innerText = 'x';
        this.object.onclick = this.action;
        return this.object;
    }

    object(){
        this.object;
    }
}