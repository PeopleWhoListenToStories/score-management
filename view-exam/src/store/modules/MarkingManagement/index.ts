import { observable, action } from "mobx"
import { getStudent, getExamStudentDetail, putExamStudentList } from "../../../api/index"

class Marking {
  @observable
  StudentList: any = [];

  @action
  async getInitStudentAction() {
    const result: any = await getStudent('1', '2', '2', 1, 2, 3, 4);
    console.log(result)
    if (result.data.code === 1) {
      this.StudentList = result.data.exam;
    }
  }

  @action
  async getExamStudentDetailAction() {
    const result: any = await getExamStudentDetail();
    console.log(result);
  }

  @action
  async putExamStudentListAction() {
    const result: any = await putExamStudentList(100);
    console.log(result);
  }

}

export default Marking;