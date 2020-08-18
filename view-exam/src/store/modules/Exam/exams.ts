//获取所有试题类型
import {action,observable} from 'mobx'
import {testingTypes,Allcourses,CreateExam,AllExamList} from '../../../api/index'
export default class ExamManagement{
    @observable
    ExamTypedata:any []=[];//考试类型的数据
    Allcoursesdata:any []=[];//考试所有课程
    Examdata:any[]=[];//所有试卷
    examinationdata:any=[];//考试题
    @action
    //获取考试类型的数据
    getExamTypedata= ()=>{
        if (this.ExamTypedata.length){
            return;
        }
        testingTypes().then((res: { data: { code: number; data: any[]; }; }) => {
            if (res.data.code === 1) {
              this.ExamTypedata = res.data.data
            }
          })
    }
    getAllcourses=async()=>{
        if (this.Allcoursesdata.length){
            return;
        }
        let result:any = await Allcourses(); 
       
        if (result.data.code === 1){
            this.Allcoursesdata = result.data.data;
        }
    }
    //获取所有的试卷列表
    getExamList = async()=>{
        if (this.Examdata.length){
            return;
        }
        let result:any = await AllExamList(); 
        if (result.data.code === 1){
            this.Examdata = result.data.exam;
        console.log(this.Examdata )
        }
    }
     //增加试卷
     addCreateExam = async(user:any)=>{
        console.log(user)
          const times= user.time.map((item:any )=>{
            let time = new Date(item._d).getTime()
             return  time
        }) 
        const subject_id=user.subject_id;
        const exam_id=user.exam_id;
        const title =user.title;
        const number =Number( user.number);
        const start_time=times[0]*1 ;
        const end_time = times[1]*1;
        
        let result:any = await CreateExam(
            subject_id ,
            exam_id,
            title ,
            start_time*1,
           end_time*1,
           Number(number),     
        ) 
        if (result.data.code === 1){
            this.examinationdata=result.data.data
            console.log( this.examinationdata)
        }
    }
    //删除试题
    delteexam = async (id:number)=>{
        let index=  this.examinationdata.questions.findIndex((items:any)=>{
            return items.exam_id===id
        })
        this.examinationdata.questions.splice(index, 1);
        console.log( this.examinationdata.questions)
    //    this.ExamManagement.examinationdata.questions.splice(0,index)
    }
}
