import React,{useEffect,useState} from 'react'
import { Button } from 'antd';
import useStore from '../../../context/useStore'
import {useObserver} from 'mobx-react-lite'
export default function() {
    let {ExamManagement} =useStore();
  //  let [list, setList] = useState<any []>([]);
    useEffect(()=>{ 
    },[])
    console.log(ExamManagement.examinationdata)
   // const {exam_name,user_name,}= ExamManagement.examinationdata.questions
    return useObserver(()=>
    <div>                       
        <Button>创建新题</Button>
        <div> 
            <div>
               {/* <p>
                   {ExamManagement.examinationdata.questions.exam_name},{ExamManagement.examinationdata.questions.user_name}
                </p>  */}
            </div>
            <div>{  ExamManagement.examinationdata.questions&&ExamManagement.examinationdata.questions.map((item:any,index:number)=>{
                   return (
                       <div key={item.exam_id}>
                           <p>
                          {index+1}:{item.title}
                          <button>删除</button>
                           </p>
                           <p>
                               {item.questions_stem}
                           </p>
                           <p>
                               {item.questions_answer}
                           </p>
                       </div>
                   )
            })}</div>
        </div>
    </div>
    ) 
}
