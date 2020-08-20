import { action, observable } from 'mobx';
import ajax from '../../../utils/request';
import { addClass, deleteclass } from '../../../api/module/class'

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
    delList() {

    }

    @action
    addClassAction() {

    }

}


