import { action, observable, } from 'mobx';
import { AllClass, GetTest, AllexamType, testType, GetAllTest, GetTests, AddText, AddTestType, newTest } from '../../../api/module/testmanagetion'

export default class AllClasses {
    @observable
    AllClass: any[] = [];
    @observable
    AllTests: any[] = [];
    @observable
    AllexamType: any[] = [];
    @observable
    Typedata: any[] = [];
    @observable
    DetailData: any[] = [];


    @action
    getClassData = () => {
        if (this.AllClass.length === 0) {
            AllClass().then(res => {
                if (res.data.code === 1) {
                    this.AllClass = res.data.data
                    sessionStorage.allClass = JSON.stringify(res.data.data)
                }
            })
        }

        if (this.AllexamType.length === 0) {
            AllexamType().then(res => {
                if (res.data.code === 1) {
                    this.AllexamType = res.data.data
                    sessionStorage.AllexamType = JSON.stringify(res.data.data)
                }
            })
        }

        if (this.Typedata.length === 0) {
            testType().then(res => {
                if (res.data.code === 1) {
                    this.Typedata = res.data.data
                }
            })
        }
    }

    @action  // 获取全部试题
    getAllTest = () => {
        GetAllTest().then(res => {
            console.log(res)
            if (res.data.code === 1) {
                console.log(res)
                this.AllTests = res.data.data
            }
        });

    }
    @action // 按条件
    getTestData = (questions_type_id?: string, subject_id?: string, exam_id?: string) => {
        GetTest(questions_type_id, subject_id, exam_id).then(res => {
            if (res.data.code === 1) {
                this.AllTests = res.data.data
            }
        })
    }


    @action // 跳转详情
    toDetail = (props: any, questions_id: string) => {
        GetTests(questions_id).then(res => {
            if (res.data.code === 1) {
                this.DetailData = res.data.data
                props.history.push({
                    pathname: `/main/detail`,
                })
            }
        })

    }
    //添加试题类型
    @action
    AddTestType = (text: string, sort?: string) => {
        AddTestType(text, sort).then(res => {
            if (res.data.code === 1) {
                testType().then(res => {
                    if (res.data.code === 1) {
                        this.Typedata = res.data.data
                    }
                })
            }else{
                
            }
        })
    }
    @action // 编辑试题
    toEdit = (props: any, questions_id: string) => {
        sessionStorage.questions_id=questions_id
        GetTests(questions_id).then(res => {
            if (res.data.code === 1) {
                this.DetailData = res.data.data
                props.history.push({
                    pathname: `/main/editQuestion`,
                })
            }
        })
    }

    //添加试题
    @action
    AddQuestion = (questions_type_id: string, questions_stem: string, subject_id: string, exam_id: string, user_id: string, questions_answer: string, title: string) => {
        AddText(questions_type_id, questions_stem, subject_id, exam_id, user_id, questions_answer, title).then(res => {

        })
    }
    //修改试题
    @action
    xiugai = (exam_id: string, questions_type_id?: string, questions_stem?: string, subject_id?: string, questions_id?: string, questions_answer?: string, title?: string) => {
        newTest(exam_id,questions_type_id,questions_stem,subject_id,questions_id,questions_answer,title).then(res => {
           if(res.data.code===1){
              this.getAllTest()
           }
        })
    }

}



