import {action,observable} from 'mobx'

class lang{
    @observable
    local='zh';

    @action                                                  
    changeLocals(loca:string){
        this.local=loca
    }
}

export default lang
