import STATE from '../State/State';
import Action from "../Action/Action";
import './StatusIndicator.css';

class StatusIndicator {
    constructor(parent){
        this.parent = parent;
        this.render = this.render.bind(this);
        this.refresh = this.refresh.bind(this);
        this.render();
    }
    
    render(){
        let me = document.createElement("div");
        me.id = 'statusIndicator';
        me.style.zIndex = 10000;
        me.innerHTML = `<h3 id='statusIndicatorMessage'></h3>`;
        this.parent.appendChild(me);
        let button = document.createElement("button");
        button.innerText = "Undo";
        button.onclick = Action.Undo;
        me.appendChild(button);
    }

    refresh(){
        let me = document.getElementById('statusIndicatorMessage');
        if(me.innerText != STATE.CARD_SELECT_STATUS) me.innerText = STATE.CARD_SELECT_STATUS;
    }
}

export default StatusIndicator;