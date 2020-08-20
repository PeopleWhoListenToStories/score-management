import { action, observable } from 'mobx';
import ajax from '../../../utils/request';
import { addClass, deleteclass, addGrade } from '../../../api/module/class'

export default   class Class {
    @observable
    classlist = []

    @action
    async getClassmanage() {
        const result: any = await ajax.get('/manger/grade');
        if (result.data.code === 1) {
            this.classlist = result.data.data
        }
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
        console.log(val);
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
