import { action, observable } from 'mobx';
import Axios from '../../../utils/request';
<<<<<<< HEAD
import { addClass, deleteclass, addGrade } from '../../../api/module/class'
=======
import { addClass } from '../../../api/module/class'
>>>>>>> 68ae0a1268738766907fe9aa2e6e8b4c4b5c411b

export default class Class {
    @observable
    classlist = []

    @action
    getClassmanage() {
        Axios.get('/manger/grade').then(res => {
            console.log(res.data.data)
            this.classlist = res.data.data
        })
    }

    @action
<<<<<<< HEAD
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
=======
    delList() {

    }

    @action
    addClassAction() {

>>>>>>> 68ae0a1268738766907fe9aa2e6e8b4c4b5c411b
    }
}

<<<<<<< HEAD
export default {
    Class: new Class()
}
=======

>>>>>>> 68ae0a1268738766907fe9aa2e6e8b4c4b5c411b
