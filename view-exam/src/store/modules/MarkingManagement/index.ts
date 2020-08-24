import { observable, action } from "mobx"
import { getStudent, getExamStudentDetail, putExamStudentList } from "../../../api/index"

class Marking {
  @observable
  StudentList: any = [];

  @action //初始化学生阅卷数据
  async getInitStudentAction() {
    const result: any = await getStudent(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    if (result.data.code === 1) {
      this.StudentList = result.data.exam;
    }
  }

  @action
  async getExamStudentDetailAction() {
    const result: any = await getExamStudentDetail();
    console.log(result)
  }

  @action
  async putExamStudentListAction() {
    const result: any = await putExamStudentList(100);
    console.log(result)
  }

}

export default Marking;