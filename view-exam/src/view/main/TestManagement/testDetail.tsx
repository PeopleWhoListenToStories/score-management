import React, { useEffect } from 'react'
import { useObserver } from 'mobx-react-lite'
import useStore from '../../../context/useStore'
import style from './detail.module.css'
import { Tag } from 'antd';
function Detail(props: any) {

    let { AllClass } = useStore()

    const questions_id = props.match.params.id
    useEffect(() => {
        AllClass.getTestData(questions_id)
    }, [])
    console.log(AllClass.DetailData)
    return useObserver(() =>
        <div className={style.Detail}>
            <div className={style.Detail_left}>
                {
                    AllClass.DetailData && AllClass.DetailData.map((item, index) => {
                        return <div key={index}>
                            <p>出题人:{item.user_name}</p>
                            <h3>题目信息</h3>
                            <div>
                                <Tag color="blue"><span>{item.questions_type_text}</span></Tag>
                                <Tag color="geekblue"><span>{item.subject_text}</span></Tag>
                                <Tag color="orange"><span>{item.exam_name}</span></Tag>
                            </div>
                    <p>{item.title}</p>
                    <div>
                        {item.questions_stem}
                    </div>
                        </div>
                    })
                }
            </div>
            <div className={style.Detail_right}>
                {
                    AllClass.DetailData && AllClass.DetailData.map((item, index) => {
                        return <div key={index}>{item.questions_answer}</div>
                    })
                }
            </div>
        </div>
    )
}
export default Detail