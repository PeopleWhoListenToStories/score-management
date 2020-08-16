import { observable} from 'mobx';

class Test {
  @observable
  str:string = '测试'
}

export default {
  Test:new Test()
}
