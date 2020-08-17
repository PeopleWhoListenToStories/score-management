import { action, observable } from 'mobx';
import { testType } from '../../../api/module/testmanagetion'
class AddType {
  @observable
  Typedata: any[] = []

  @action
  getTypeData = () => {
    testType().then(res => {
      if (res.data.code === 1) {
        this.Typedata = res.data.data
      }
    })
  }
}

export default {
  AddType: new AddType()
}