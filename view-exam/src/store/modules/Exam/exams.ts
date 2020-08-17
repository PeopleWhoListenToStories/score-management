//获取所有试题类型
import { action, observable } from 'mobx'
import { testingTypes } from '../../../api/index'
export default class ExamManagement {
    @observable
    ExamTypedata: any[] = []//考试类型的数据
    @action
    getExamTypedata = async () => {//获取考试类型的数据
        console.log(1111)
        if (this.ExamTypedata.length) {
            return;
        }
        let result: any = await testingTypes();

        if (result.code === 1) {
            this.ExamTypedata = result.data.data;
            console.log(result.data.data)
        }
    }
}
