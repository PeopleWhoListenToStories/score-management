import { action, observable } from 'mobx';
import ajax from '../../../utils/request';
import {  deleteclass } from '../../../api/module/class'

export default class Class {
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
            this.classlist = result.data.data
        }
    }

    @action
    upd(val: any) {
        console.log(val.grade_name, val.room_text);
    }

    @action
    addClassAction(values: any) {

    }

}


