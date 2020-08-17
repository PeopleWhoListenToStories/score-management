import {action,observable} from 'mobx';
import {testType} from '../../../api/module/testmanagetion'

export default class AddType {
  @observable
  Typedata:any [] = []

  @action
  getTypeData=()=>{
    testType().then(res=>{
      console.log(res)
      // if(res.data.code===1){
      //     this.Typedata=res.data.data
      // }
  })
  }
}
 