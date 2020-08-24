
import {action,observable} from 'mobx';
import {message} from 'antd';
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
       if(result.data.code === 1){
        message.success(result.data.msg);
        this.list();
       } 
    }
}

 
