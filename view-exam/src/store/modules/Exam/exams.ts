//获取所有试题类型
import { action, observable } from 'mobx'
import {message} from "antd"
import { testingTypes, Allcourses, CreateExam, AllExamList, ExamDetail, Getdata } from '../../../api/index'
export default class ExamManagement {
    @observable
    ExamTypedata: any[] = [];//考试类型的数据
    @observable
    Allcoursesdata: any[] = [];//考试所有课程
    @observable
    Examdata: any[] = [];//所有试卷
    @observable
    examinationdata: any = [];//考试题
    @observable
    Examdetaildata: any = [];//试卷详情
    @observable
    conditionsdata:any = [];
    @action
    //获取考试类型的数据
    getExamTypedata = () => {
        if (this.ExamTypedata.length) {
            return;
        }
        testingTypes().then((res: { data: { code: number; data: any[]; }; }) => {
            if (res.data.code === 1) {
                this.ExamTypedata = res.data.data
            }
        })
    }
    getAllcourses = async () => {
        if (this.Allcoursesdata.length) {
            return;
        }
        let result: any = await Allcourses();

        if (result.data.code === 1) {
            this.Allcoursesdata = result.data.data;
            message.success(result.data.msg);
        }
        else {
            message.warn(result.data.msg);
        }
    }
    //获取所有的试卷列表
    getExamList = async () => {
        if (this.Examdata.length) {
            return;
        }
        let result: any = await AllExamList();
        if (result.data.code === 1) {
            this.Examdata = result.data.exam;
            message.success(result.data.msg);
        }
        else {
            message.warn(result.data.msg);
        }
    }
    //增加试卷
    addCreateExam = async (user: any) => {
        const times = user.time.map((item: any) => {
            let time = new Date(item._d).getTime()
            return time
        })
        const subject_id = user.subject_id;
        const exam_id = user.exam_id;
        const title = user.title;
        const number = Number(user.number);
        const start_time = times[0] * 1;
        const end_time = times[1] * 1;

        let result: any = await CreateExam(
            subject_id,
            exam_id,
            title,
            start_time * 1,
            end_time * 1,
            Number(number),
        )
        if (result.data.code === 1) {
            this.examinationdata = result.data.data
            message.success(result.data.msg);
        }
        else {
            message.warn(result.data.msg);
        }
    }
    //删除试题
    delteexam = async (id: number) => {
        let index = this.examinationdata.questions.findIndex((items: any) => {
            return items.exam_id === id
        })
        this.examinationdata.questions.splice(index, 1);
    }
    //试卷详情
    examdetail = async (id: string) => {
        if (this.examinationdata.length) {
            return;
        }
        let result: any = await ExamDetail(id);
        console.log(result)
        if (result.data.code === 1) {
            this.examinationdata = result.data.data;
             message.success(result.data.msg);
        }
        else {
            message.warn(result.data.msg);
        }
    }

    getdata = async (exam_id: string, subject_id: string) => {
        let result: any = await Getdata(exam_id, subject_id);
        console.log(result)
        if (result.data.code === 1) {
            message.success(result.data.msg);
            this.conditionsdata = result.data.data
            // this.examinationdata = result.data.data;
        }
        else {
            message.warn(result.data.msg);
        }
    }

}
