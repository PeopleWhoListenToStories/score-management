import {action,observable} from 'mobx';
import Axios from '../../../utils/request';

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
    addList(){

    }

}

export default {
    Class:new Class()
}
