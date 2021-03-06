import { action, observable } from 'mobx';
import Axios from '../../../utils/request';
import { deleteRoom, addRoom } from '../../../api/module/class'


export default class Room {
    [key: string]: any;

    @observable
    roomlist: any = []

    @action
    async getRoommanage() {
        const result: any = await Axios.get('/manger/room');
        if (result.data.code === 1) {
            this.roomlist = result.data.data
        }
    }

    @action
    async onFinish(values: any) {
        console.log(values.username)
        let result = await addRoom(values.username)
        if (result.data.code === 1) {
            console.log(result.data.msg)
            this.getRoommanage();
        }
    };

    @action
    async Del(room_id: string) {
        let result = await deleteRoom(room_id)
        if (result.data.code === 1) {
            console.log(result.data.msg)
            this.getRoommanage();
        }
    }

}


