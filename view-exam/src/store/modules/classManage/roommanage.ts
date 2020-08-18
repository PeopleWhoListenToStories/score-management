import {action,observable} from 'mobx';
import Axios from '../../../utils/request';

class Room {
    @observable
    roomlist:any=[]

    @observable
    visible:boolean=false

    @action
    getRoommanage(){
        Axios.get('/manger/room').then((res:any)=>{
            console.log(res.data.data,'***') 
            this.roomlist=res.data.data
        })
    }

    @action
    showModal(){
      console.log(1)
        this.visible=true;
    };
   

    @action 
 onFinish(values: any){
        console.log('Success:', values.username);
        let newlist=[...this.roomlist]
        newlist.push(values.username)
        this.roomlist=newlist
        this.visible=false;
    };

    @action
    del(e:any){
       
    }

}

export default {
    Room:new Room()
}
