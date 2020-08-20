import { action, observable } from 'mobx';
import Axios from '../../../utils/request';
import { deleteRoom, addRoom } from '../../../api/module/class'


export default class Room {
    [key: string]: any;

    @observable
    roomlist: any = []

    @observable
    visible: boolean = false

    @action
<<<<<<< HEAD
    getRoommanage() {
        Axios.get('/manger/room').then((res: any) => {
            console.log(res.data.data)
            this.roomlist = res.data.data
        })
=======
    async getRoommanage() {
        const result: any = await Axios.get('/manger/room');
        if (result.data.code === 1) {
            this.roomlist = result.data.data
        }
>>>>>>> 68ae0a1268738766907fe9aa2e6e8b4c4b5c411b
    }

    @action
    showModal() {
        this.visible = true;
    };
    @action
    close() {
        this.visible = false;
    }

    @action
<<<<<<< HEAD
   async onFinish(values: any) {
       console.log(values.username)
        let result=await addRoom(values.username)
        if (result.data.code === 1) {
=======
    async onFinish(values: any) {
        console.log(values.username)
        let result = await addRoom(values.username)
        if (result.data.code === '1') {
>>>>>>> 68ae0a1268738766907fe9aa2e6e8b4c4b5c411b
            console.log(result.data.msg)
            this.getRoommanage();
        }
        this.visible = false;
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


