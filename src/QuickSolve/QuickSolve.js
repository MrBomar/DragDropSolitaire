import { STATE } from "../index";
import "./QuickSolve.css";

//This function will render a quick solve button and possibly manage the quick solve process.
let QuickSolveFunction = "Replace this with an actual function";

export default class QuickSolve{
    constructor(parent){
        this.name = "quickSolve";
        this.clickEvents = [
            {
                trigger: "click",
                action: QuickSolveFunction
            }
        ];
        this.parent = parent;
        this.element = this.element.bind(this);
        this.desctruct = this.desctruct.bind(this);
        this.refresh = this.refresh.bind(this);
        this.render = this.render.bind(this);
        this.render();
    }

    element() { return document.getElementById(this.name)}

    desctruct() {
        this.clickEvents.forEach(item=>{this.element().removeEventListener(item.trigger, item.action)});
        this.element().remove();
    }

    refresh() {
        //this.showHide();
    }

    render() {
        let me = document.createElement('button');
        me.id = this.name;
        me.innerText = "Quick Solve";
        this.parent.element().appendChild(me);
        console.log(document.getElementById(this.name));
        this.clickEvents.forEach(item=>{this.element().addEventListener(item.trigger, item.action)});
    }

    showHide() {
        if(STATE.GAME_WIN_DETECTED) {
            this.element().classList.remove("hide");
        } else {
            this.element().classList.add("hide");
        }
    }
}