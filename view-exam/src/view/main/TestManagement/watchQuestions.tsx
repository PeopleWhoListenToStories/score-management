import React, { useEffect, useState } from 'react'
import useStore from '../../../context/useStore'
import { useObserver } from 'mobx-react-lite'
import style from './watch.module.css'
//表单
import {
    Form,
    Button,
    Select,
    Empty,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
//tag
import { Tag } from 'antd';
const { CheckableTag } = Tag;


export default function WatchQuestions(props: any) {
    
    let { AllClass } = useStore()
    useEffect(() => {
        AllClass.getClassData()
        AllClass.getAllTest()
    }, [AllClass])
    //单选
    let [selectedTag,setselectedTag]=useState<any[]>([])
    let [sub,setsub]=useState<any>(undefined)

    //全选控制
    let [allflag,setallflag]=useState<boolean>(false)
    const onFinish = (values: any) => {
 
        let subject_id = sub;
        let exam_id = values.select1;
        let questions_type_id = values.select2;
        AllClass.getTestData(questions_type_id, subject_id, exam_id)
    };
    const handleChange=(tag:any, checked:boolean)=> {

        const  selectedTags  =  JSON.parse(JSON.stringify(selectedTag)) ;
        let nextSelectedTags=[]
        nextSelectedTags[0] = checked ?   tag.subject_text  : selectedTags.filter((t:any) => t !== tag);
        setselectedTag(nextSelectedTags)
        setsub(tag.subject_id)
    }
    
    //全选
    const handAll=()=>{
        setallflag(!allflag)
        // setselectedTag(AllClass.AllClass)
    }
    return useObserver(() =>
        <div className={style.watch_}>
            <div className={style.watch_top}>
                <Form
                    labelCol={{ offset: 1 }}
                    wrapperCol={{ span: 20 }}
                    layout="horizontal"
                    onFinish={onFinish}
                >
                    <div className={style.class_type}>
                        <Form.Item  label="课程分类">
                             <CheckableTag checked={allflag} onChange={handAll}>All</CheckableTag>
                            {AllClass.AllClass.map(tag => (
                                <CheckableTag
                                    key={tag.subject_text}
                                    checked={selectedTag.indexOf(tag.subject_text) > -1}
                                    onChange={(checked) => handleChange(tag, checked)}
                                >
                                    {tag.subject_text}
                                </CheckableTag>
                            ))}

                        </Form.Item>
                    </div>

                    <div className={style.test_type}>
                        <Form.Item label="考试类型" style={{ width: 350 }} name="select1">
                            <Select>
                                {
                                    AllClass.AllexamType.map((item, index) => {
                                        return (
                                            <Select.Option value={item.exam_id} key={index}>{item.exam_name}</Select.Option>
                                        )
                                    })
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item label="题目类型" style={{ width: 350 }} name="select2">
                            <Select>
                                {
                                    AllClass.Typedata.map((item, index) => {
                                        return (
                                            <Select.Option value={item.questions_type_id} key={index}>{item.questions_type_text}</Select.Option>
                                        )
                                    })
                                }

                            </Select>
                        </Form.Item>

                        <Button type="primary" icon={<SearchOutlined />} htmlType="submit">查询</Button>
                    </div>
                </Form>
            </div>

            <div className="watch_bottom">
                <div className={style.watch_Q}>
                    <ul className={style.watch_ul}>
                        {
                            AllClass.AllTests.length===0?
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />:
                            AllClass.AllTests && AllClass.AllTests.map((item, index) => {
                                return (
                                    <li key={index} className={style.watch_li}>
                                        <div onClick={() => { AllClass.toDetail(props, item.questions_id) }}>
                                            <p>{item.title}</p>
                                            <p>
                                                <Tag color="blue"><span>{item.questions_type_text}</span></Tag>
                                                <Tag color="geekblue"><span>{item.subject_text}</span></Tag>
                                                <Tag color="orange"><span>{item.exam_name}</span></Tag>
                                            </p>
                                            <p>{item.user_name}发布</p>
                                        </div>
                                        <span onClick={() => { AllClass.toEdit(props, item.questions_id) }}>编辑</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
