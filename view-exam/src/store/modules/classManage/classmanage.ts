import { action, observable } from 'mobx';
import Axios from '../../../utils/request';
import { addClass, deleteclass, addGrade } from '../../../api/module/class'

export default   class Class {
    @observable
    classlist = []

    @action
   async getClassmanage() {
      await  Axios.get('/manger/grade').then(res => {
            console.log(res.data.data)
            this.classlist = res.data.data
        })
    }

    @action
    async delList(id: string) {
        let result = await deleteclass(id)
        if (result.data.code === 1) {
            console.log(result.data.msg)
            this.getClassmanage()
        }
    }

    @action
    upd(val:any) {
        console.log(val.grade_name,val.room_text);
    }
    @action
    async addClassAction(val: any) {
        console.log(val)
            let { grade_name, room_text, subject_text } = val;
            let result = await addGrade(grade_name, room_text, subject_text)
            if (result.data.code === 1) {
                console.log(result.data.msg)
                this.getClassmanage();
         }
    }
}
