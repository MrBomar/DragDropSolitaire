export default class BaseClass {
    constructor(name, events){
        this.eventListeners = events;
        this.name = name;
        this.addClass = this.addClass.bind(this);
        this.addEventListeners = this.addEventListeners.bind(this);
        this.children = [];
        this.destruct = this.destructor.bind(this);
        this.getBottom = this.getBottom.bind(this);
        this.getTop = this.getTop.bind(this);
        this.getLeft = this.getLeft.bind(this);
        this.getHeight = this.getHeight.bind(this);
        this.getRight = this.getRight.bind(this);
        this.getWidth = this.getWidth.bind(this);
        this.removeClass = this.removeClass.bind(this);
        this.removeEventListeners = this.removeEventListeners.bind(this);
        this.setBottom = this.setBottom.bind(this);
        this.setTop = this.setTop.bind(this);
        this.setLeft = this.setLeft.bind(this);
        this.setHeight = this.setHeight.bind(this);
        this.setRight = this.setRight.bind(this);
        this.setWidth = this.setWidth.bind(this);
        this.setZIndex = this.setZIndex.bind(this);
        this.zIndex = 0;
    }

    addClass(a) {
        this.element.classList.add(a);
    }

    addEventListeners() {
        this.eventListeners.forEach(i => {
            this.element.addEventListener(i.trigger, i.action);
        })
    }

    destruct() {
        if(this.children.length > 0) {this.children.forEach(i => i.destruct())}; //Initiate the destruction property for each child.
        this.removeEventListeners();
        this.element.remove();
    }

    getBottom() {
        return this.getTop() + this.element.offsetHeight;
    }

    getTop() {
        return this.element.offsetTop
    }
    
    getLeft() {
        return this.element.offsetLeft
    }

    getHeight() {
        return this.element.offsetHeight
    }

    getRight() {
        return this.getLeft() + this.element.offsetWidth;
    }
    
    getWidth() {
        return this.element.offsetWidth
    }

    removeEventListeners() {
        this.eventListeners.forEach(i => {
            this.element.removeEventListener(i.trigger, i.action);
        })
    }

    destructor() {
        this.removeEventListeners();
        this.element.remove();
    }

    removeClass(a) {
        this.element.classList.remove(a);
    }

    setBottom(y) {
        this.element.style.bottom = `${y}px`;
    }

    setTop(y) {
        this.element.style.top = `${y}px`;
    };

    setLeft(x) {
        this.element.style.left = `${x}px`;
    };

    setHeight(y) {
        this.element.style.height = `${y}px`;
    }

    setRight(x) {
        this.element.style.right = `${x}px`;
    }

    setWidth(x) {
        this.element.style.width = `${x}px`;
    }

    setZIndex(z) {
        this.element.style.zIndex = z;
        this.zIndex = z;
    };
}