import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"

import useStore from "../../../context/useStore"
import { Table, Tag, Space } from 'antd';


import ExamPaperClassListCss from "./examPaperClassList.module.scss";



const ExamPaperClassList: React.FC = () => {
    const history = useHistory();

    const [pageSize, UsePageSize] = useState<number>(10);
    const [current, UseCurrent] = useState<number>(1);

    const { Marking, Class } = useStore();

    const columns = [
        {
            title: '班级名',
            dataIndex: 'grade_name',
            key: 'grade_id',
        },
        {
            title: '课程名称',
            dataIndex: 'subject_text',
            key: 'grade_id',
        },
        {
            title: '阅卷状态',
            dataIndex: 'status',
            key: 'grade_id',
        },
        {
            title: '成材率',
            dataIndex: 'room_text',
            key: 'grade_id',
        },
        // {
        //   title: 'Tags',
        //   key: 'tags',
        //   dataIndex: 'tags',
        //   render: tags => (
        //     <>
        //       {tags.map(tag => {
        //         let color = tag.length > 5 ? 'geekblue' : 'green';
        //         if (tag === 'loser') {
        //           color = 'volcano';
        //         }
        //         return (
        //           <Tag color={color} key={tag}>
        //             {tag.toUpperCase()}
        //           </Tag>
        //         );
        //       })}
        //     </>
        //   ),
        // },
        {
            title: '操作',
            key: 'action',
            render: (text: any) => (
                <Space size="middle">
                    <a onClick={() => { history.push('/main/classmate') }}>批卷</a>
                </Space>
            ),
        },
    ];

    // Table 分页器的配置
    const paginationConfig = {
        pageSizeOptions: ['5', '10', '20', '50'],
        showSizeChanger: true,
        showQuickJumper: false,
        showTotal: () => `共${Class.classlist.length}条`,
        pageSize: pageSize,
        current: current,
        total: Class.classlist.length,
        onShowSizeChange: (current: any, pageSize: any) => changePageSize(pageSize, current),
        onChange: (current: number) => changePage(current),
    }

    // 分页器修改页码
    function changePageSize(pageSize: number, current: number) {
        UsePageSize(pageSize)
        UseCurrent(current)
    }
    // 分页器修改页数
    function changePage(current: number) {
        UseCurrent(current)
    }

    useEffect(() => {
        // Marking.getInitStudentAction();
        // Marking.getExamStudentDetailAction();
        // Marking.putExamStudentListAction();
        Class.getClassmanage(); // 获取班级数据
    })

    return (
        <div className={ExamPaperClassListCss.wrapper}>
            <h1>待批班级</h1>
            <div className="box">
                <Table columns={columns}
                    dataSource={Class.classlist}
                    rowKey={(record: any) => record.grade_id}
                    rowClassName={(record, index) => {
                        let className = 'light-row';
                        if (index % 2 === 1) className = 'dark-row';
                        return className;
                    }}
                    pagination={paginationConfig} />
            </div>
        </div>
    )
}

export default ExamPaperClassList;


