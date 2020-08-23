import { action, observable } from 'mobx';
import ajax from '../../../utils/request';
import { deleteclass, addGrade ,updateClass } from '../../../api/module/class'

export default class Class {
    @observable
    classlist = []
    @observable
    con=[]

    @action
    async getClassmanage() {
        const result: any = await ajax.get('/manger/grade');
        if (result.data.code === 1) {
            console.log(result.data.data)
            this.classlist = result.data.data
        }
    }

    @action
    async delList(id: string) {
        let result = await deleteclass(id)
        if (result.data.code === 1) {
            this.getClassmanage()
        }
    }

    @action
    upd(val: any) {
        console.log(val.grade_name, val.room_text);
        this.con=val;
        console.log(this.con)
    }

    @action
   async updateC(val: any) {
       console.log(val)

       let result =await updateClass(val.room_text,val.subject_text)
       if(result.data.code===1){
           console.log(result.data.msg)
           this.getClassmanage()
       }
    }


    @action
    async addClassAction(values: any) {
        console.log(values) 
        let { grade_name, room_text, subject_text } = values;
        let result = await addGrade(grade_name, room_text, subject_text)
        if (result.data.code === 1) {
            console.log(result.data.msg)
            this.getClassmanage();
        }
    }

}


