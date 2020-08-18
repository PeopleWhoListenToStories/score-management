import React ,{useEffect} from 'react'
import useStore from '../../../context/useStore'
import {useObserver} from 'mobx-react-lite'
import { Table, Tag, Space ,Button} from 'antd';
export default function (){
    let {ExamManagement} =useStore()
    useEffect(()=>{
     ExamManagement.getExamList();
    },[])

    const columns = [
        {
          title: '试卷信息',
          dataIndex: 'title',
          key: 1,
          render: (text:number, record:any) => {
            return <>   
                 <p>{record.title}</p>
                <span>开始时间{new Date(record.start_time*1).toLocaleDateString()}</span>
                  <span>{record.number}作弊0分</span>
                </>
         }
        },
        {
          title: '班级',
          dataIndex: 'grade_name',
          key: 2,
        },
        {
          title: '创建人',
          dataIndex: 'user_name',
          key: 3,
        },
        {
          title: '开始时间',
          dataIndex: 'start_time',
          key: 4,
          render: (text:number, record:any) => {
            return <span>
                {
                new Date(text*1).toLocaleString()
                }
            </span>
         }
        },
        {
            title: '结束时间',
            dataIndex: 'end_time',
            key: 5,
            render: (text:number, record:any) => {
                return <span>
                    {
                  new Date(text*1).toLocaleString()
                    }
            </span>
             }
          },
        {
          title: '操作',
          key: 'action',
          render: (text:number, record:any) => {
            return <span>
                {
                    <button onClick={()=>{console.log(record)}}>详情</button>
                }
        </span>
         }
        },
      ];
     return useObserver(()=>
        <Table columns={columns} dataSource={ExamManagement.Examdata} />
     )
    }