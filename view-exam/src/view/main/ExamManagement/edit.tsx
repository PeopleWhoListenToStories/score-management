import React,{useEffect,useState} from 'react'
import { Button } from 'antd';
import useStore from '../../../context/useStore'
import {useObserver} from 'mobx-react-lite'
import Editor from 'for-editor'
export default function() {
    let {ExamManagement} =useStore();
    useEffect(()=>{ 
    },[])
    function delteexam(id:number){
    let index=  ExamManagement.examinationdata.questions.findIndex((items:any)=>{
        return items.exam_id===id
    })
    ExamManagement.examinationdata.questions.splice(index, 1);
    console.log(ExamManagement.examinationdata.questions)
}
    return useObserver(()=>
    <div>                       
        <Button>创建新题</Button>
        <div> 
            <div>{ExamManagement.examinationdata.questions&&ExamManagement.examinationdata.questions.map((item:any,index:number)=>{
                   return (
                       <div key={item.exam_id}>
                           <p>
                          {index+1}:{item.title}
                          <button onClick={()=>{
                             delteexam(item.exam_id)//调用删除方法
                          }}>删除</button>
                           </p>
                           <p>
                           <Editor value={item.questions_stem}></Editor>
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
