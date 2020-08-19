import {action,observable} from 'mobx';
import Axios from '../../../utils/request';
import {addClass} from '../../../api/module/class'

class Class {
    @observable
    classlist=[]

    @action
    getClassmanage(){
        Axios.get('/manger/grade').then(res=>{
            console.log(res.data.data)
            this.classlist=res.data.data
        })
    }

    @action 
    delList(){

    }

    @action
    addClassAction(){
        
    }

}

export default {
    Class:new Class()
}
