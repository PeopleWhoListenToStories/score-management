import React, { useEffect, useState } from 'react'
import { Button, message, Popconfirm } from 'antd';
import useStore from '../../../context/useStore'
import { useObserver } from 'mobx-react-lite'
import Editor from 'for-editor'
import style from './Edit.module.css'
import { useHistory } from 'react-router-dom'
export default function () {
    let { ExamManagement } = useStore();
    let history = useHistory()
    useEffect(() => {
    }, [])
    console.log(ExamManagement.examinationdata)
    function delteexam(id: number) {
        let index = ExamManagement.examinationdata.questions.findIndex((items: any) => {
            return items.exam_id === id
        })
        ExamManagement.examinationdata.questions.splice(index, 1);
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
            <div className={style.inner}>
                <div className={style.title}>
                    <Button onClick={() => { history.push('/main/addQuestion') }}>创建新题</Button>
                    <h2>{ExamManagement.examinationdata.title}</h2>
                    <p><span>{ExamManagement.examinationdata.user_id}</span></p>
                </div>

                <div className={style.textexam}>{ExamManagement.examinationdata.questions && ExamManagement.examinationdata.questions.map((item: any, index: number) => {
                    return (
                        <div className={style.exams} key={index}>
                            <p>
                                <span> {index + 1}:{item.title}</span>
                                <Popconfirm
                                    title="集美你确定要删除嘛"
                                    onConfirm={() => { confirm(item.exam_id) }}
                                    onCancel={cancel}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <a href="#">删除</a>
                                </Popconfirm>
                            </p>
                            <Editor value={item.questions_stem}></Editor>
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
