import React, { useEffect } from 'react'
import { useObserver } from 'mobx-react-lite'
import useStore from '../../../context/useStore'
import Editor from 'for-editor'
import style from './Edit.module.css'
import { message, Popconfirm,Button } from 'antd';
import { useHistory } from 'react-router-dom'
export default function () {
    let { ExamManagement } = useStore()
    let history =useHistory()
    useEffect(() => {
    })
    function delteexam(id: number) {
        console.log(id)
        let index = ExamManagement.conditionsdata.findIndex((items: any) => {
            return items.exam_id === id
        })
        ExamManagement.conditionsdata.splice(index, 1);
    }
    function confirm(id: any) {
        delteexam(id)//调用删除方法
        message.success('删除成功');
    }

    function cancel() {
        message.error('删除失败');
    }
    return useObserver(() =>
        <div className={style.box}>
            <div>
            {
                 ExamManagement.conditionsdata.length===0
                 ?
                 <Button onClick={() => { history.push('/main/addQuestion') }}>创建新题</Button>
                :
                ExamManagement.conditionsdata.map((item: any, index: number) => {

                    return (
                        <div className={style.box} key={index}>
                            <p key={index}>{item.title}</p>
                            <div className={style.exams} >
                                <p>
                                    <span> {index + 1}:{item.title}</span>
                                    <Popconfirm
                                        title="集美你确定要删除嘛"
                                        onConfirm={() => { confirm(item.exam_id) }}
                                        onCancel={cancel}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <a href="/#">删除</a>
                                    </Popconfirm>
                                </p>
                                <Editor value={item.questions_stem}></Editor>
                            </div>
                        </div>
                    )

                })
            }
            </div>
        </div>
    )
}