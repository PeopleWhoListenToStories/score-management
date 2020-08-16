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


export default function WatchQuestions() {
    let [selectedTags, setSelectedTags] = useState<any[]>([])
    let { AllClass } = useStore()
    useEffect(() => {
        AllClass.getClassData()
    })

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
                                <Select.Option value="周考一">周考一</Select.Option>
                                <Select.Option value="周考二">周考二</Select.Option>
                                <Select.Option value="周考三">周考三</Select.Option>
                                <Select.Option value="月考">月考</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="题目类型" style={{ width: 350 }}>
                            <Select>
                                <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                        </Form.Item>

                        <Button type="primary" icon={<SearchOutlined />}>查询</Button>
                    </div>
                </Form>


            </div>
        </div>
    )
}
