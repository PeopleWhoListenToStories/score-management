import {action,observable} from 'mobx';
import {AllClass} from '../../../api/module/testmanagetion'
export default class AllClasses {
  @observable
  AllClass:any [] = []

  @action
  getClassData=()=>{
     AllClass().then(res=>{
         if(res.data.code===1){
             this.AllClass=res.data.data
         }
     })
  }
}
