
import {action,observable} from 'mobx';
import Axios from '../../../utils/request';
import {already} from '../../../api/module/class'

export default  class Stu {
    @observable
    stulist=[]

    @action
    list(){
        Axios.get('/manger/student').then(res=>{
            console.log(res)
        })
    }
}

 
