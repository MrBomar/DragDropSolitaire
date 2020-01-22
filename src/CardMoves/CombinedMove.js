import Base from './Base';

export default class CombinedMove extends Base {
    constructor(actions){
        super();
        this.actions = actions;
    }

    reverse(){
        this.actions.forEach(action => action.reverse());
        this.finish();
    }
}