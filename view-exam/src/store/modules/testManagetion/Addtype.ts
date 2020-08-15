import {action,observable} from 'mobx';
import {testType} from '../../../api/module/testmanagetion'
class AddType {
  @observable
  Typedata:any [] = []

  @action
  getTypeData=()=>{
      const res:any=testType();
      if(res.code===1){
          this.Typedata=res.data
         console.log(res.data)
        
      }
  }
}

export default AddType