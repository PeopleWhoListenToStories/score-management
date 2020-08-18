import { action, observable } from 'mobx';
import Axios from '../../../utils/request';
import { deleteRoom ,addRoom } from '../../../api/module/class'


class Room {
    [key: string]: any;

    @observable
    roomlist: any = []

    @observable
    visible: boolean = false

    @action
    getRoommanage() {
        Axios.get('/manger/room').then((res: any) => {
            this.roomlist = res.data.data
        })
    }

    @action
    showModal() {
        this.visible = true;
    };
    @action
    close(){
        this.visible = false;
    }


    @action
   async onFinish(values: any) {
       console.log(values.username)
        // let newlist = [...this.roomlist]
        // newlist.push(values.username)
        // this.roomlist = newlist
        let result=await addRoom(values.username)
        if (result.data.code === '1') {
            console.log(result.data.msg)
        }
        this.visible = false;
    };

    @action
    async Del(room_id: string) {
        let result = await deleteRoom(room_id)
        if (result.data.code === '1') {
            console.log(result.data.msg)
        }


    }

}

export default {
    Room: new Room()
}
