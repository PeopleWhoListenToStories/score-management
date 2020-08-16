//获取所有试题类型
import {action,observable} from 'mobx'
import {testingTypes} from '../../../api/index'
class ExamManagement{
    @observable
    ExamTypedata:any []=[]//考试类型的数据
    @action
    getExamTypedata=async ()=>{//获取考试类型的数据
        if (this.ExamTypedata.length){
            return;
        }
        let result:any = await testingTypes();
        if (result.code === 1){
            this.ExamTypedata = result.data;
        }
    }
}
export default {
    ExamManagement:new ExamManagement()
  }