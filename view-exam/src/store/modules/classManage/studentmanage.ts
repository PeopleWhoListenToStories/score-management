
import {action,observable} from 'mobx';
import Axios from '../../../utils/request';
import {delStu} from '../../../api/module/class'

export default  class Stu {
    @observable
    stulist=[]

    @action
    list(){
        Axios.get('/manger/student/new').then(res=>{
            this.stulist=res.data.data
        })
    }
    @action 
   async Del(id:string){
       let result=await delStu(id);
       console.log(result)
       if(result){
           console.log(result.data.msg)
           this.list()
       }
    }
}

 
