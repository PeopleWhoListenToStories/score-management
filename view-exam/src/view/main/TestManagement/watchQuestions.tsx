import React, { useEffect, useState } from 'react'
import useStore from '../../../context/useStore'
import { useObserver } from 'mobx-react-lite'
import style from './watch.module.css'

//表单
import {
    Form,
    Button,
    Select,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
//tag
import { Tag } from 'antd';
const { CheckableTag } = Tag;


export default function WatchQuestions(props:any) {
    let [selectedTags, setSelectedTags] = useState<any[]>([])
    let { AllClass } = useStore()
    useEffect(() => {
        AllClass.getClassData()
        AllClass.getTestData()
    },[])

    //跳详情
    const toDetail=(id:string)=>{
        console.log(id)
         props.history.push({
             pathname:`/main/detail/${id}`,
             
         })
    }
    const handleChange = (tag: any, checked: any) => {
        const selectedTagss = selectedTags;
        const nextSelectedTags = checked ? [...selectedTagss, tag] : selectedTagss.filter(t => t.subject_text !== tag);
        setSelectedTags(nextSelectedTags)
    }
    return useObserver(() =>
        <div className={style.watch_}>
            <div className={style.watch_top}>
                <div className={style.class_type}>
                    <>
                        <span style={{ marginRight: 8 }}>课程分类:</span>
                        {AllClass.AllClass && AllClass.AllClass.map(tag => (
                            <CheckableTag
                                key={tag.subject_id}
                                checked={selectedTags.indexOf(tag.subject_text) > -1}
                                onChange={checked => handleChange(tag.subject_text, checked)}
                            >
                                {tag.subject_text}
                            </CheckableTag>
                        ))}
                    </>
                </div>
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                >
                    <div className={style.test_type}>
                        <Form.Item label="考试类型" style={{ width: 350 }}>
                            <Select>
                                {
                                    AllClass.AllexamType.map((item,index)=>{
                                        return(
                                        <Select.Option value={item.exam_name} key={index}>{item.exam_name}</Select.Option>
                                        )
                                    })
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item label="题目类型" style={{ width: 350 }}>
                            <Select>
                                {
                                    AllClass.Typedata.map((item,index)=>{
                                        return(
                                        <Select.Option value={item.questions_type_text} key={index}>{item.questions_type_text}</Select.Option>
                                        )
                                    })
                                }
                                
                            </Select>
                        </Form.Item>

                        <Button type="primary" icon={<SearchOutlined />}>查询</Button>
                    </div>
                </Form>
            </div>

            <div className="watch_bottom">
            <div className={style.watch_Q}>
            <ul className={style.watch_ul}>
                {
                    AllClass.AllTests.map((item, index) => {
                        return (
                            <li key={index} className={style.watch_li} onClick={()=>{toDetail(item.questions_id)}}>
                                <div>
                                    <p>{item.title}</p>
                                    <p>
                                        <Tag color="blue"><span>{item.questions_type_text}</span></Tag>
                                        <Tag color="geekblue"><span>{item.subject_text}</span></Tag>
                                        <Tag color="orange"><span>{item.exam_name}</span></Tag>
                                    </p>
                                    <p>{item.user_name}发布</p>
                                </div>
                                <p>编辑</p>
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
