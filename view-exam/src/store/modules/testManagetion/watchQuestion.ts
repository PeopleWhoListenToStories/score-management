import { action, observable } from 'mobx';
import { AllClass, GetTest, AllexamType, testType } from '../../../api/module/testmanagetion'

class AllClasses {
    @observable
    AllClass: any[] = [];
    AllTests: any[] = [];
    AllexamType: any[] = [];
    Typedata: any[] = [];
    DetailData:any[]=[];


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
                    sessionStorage.Typedata = JSON.stringify(res.data.data)
                }
            })
        }


    }

    @action
     getTestData = (questions_id?: string, questions_type_id?: string, subject_id?: string, exam_id?: string) => {
        console.log(questions_id)
         GetTest(questions_id , questions_type_id, subject_id, exam_id).then(res => {
             
            if (res.data.code === 1) {
                if(questions_id){
                    console.log(111)
                    this.DetailData=res.data.data
                    
                }else{

                    this.AllTests = res.data.data
                }
                

            }
        })
    }
}

export default {
    AllClasses: new AllClasses()
}