import {action,observable} from 'mobx'

class lang{
    @observable
    local='zh';

    @action                                                  
    changeLocals(loca:string){
        console.log(loca)
        this.local=loca
    }
}

export default lang
