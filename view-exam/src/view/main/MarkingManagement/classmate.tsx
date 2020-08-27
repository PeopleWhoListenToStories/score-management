import React, { useEffect, useState } from "react";
import { useObserver } from 'mobx-react-lite';
import ClassMateCss from "./classMate.module.scss";
import useStore from "../../../context/useStore";
import { Form, Table, Select, Button, Space, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import xlsx from "xlsx"

const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const columns = [
  {
    // width:150,
    // align: 'center',
    className: 'classMate_ant-table-cell__TL53g',
    title: '班级',
    dataIndex: 'grade_id',
    key: "student_id",
  },
  {
    // width:150,
    // align: 'center',
    className: 'classMate_ant-table-cell__TL53g',
    title: '姓名',
    dataIndex: 'student_name',
    key: "student_id",
  },
  {
    // width:150,
    // align: 'center',
    className: 'classMate_ant-table-cell__TL53g',
    title: '阅卷状态',
    dataIndex: 'status',
    key: "student_id",
  },
  {
    // width:150,
    // align: 'center',
    className: 'classMate_ant-table-cell__TL53g',
    title: '开始时间',
    dataIndex: 'start_time',
    key: "student_id",
    render: (text: any) => <span>{`${new Date(Number(text)).toLocaleDateString()}`}  {`${new Date().toLocaleTimeString().slice(2)}`}</span>,
  },
  {
    // width:150,
    // align: 'center',
    className: 'classMate_ant-table-cell__TL53g',
    title: '结束时间',
    dataIndex: 'end_time',
    key: "student_id",
    render: (text: any) => <span>{`${new Date(Number(text)).toLocaleDateString()}`}  {`${new Date().toLocaleTimeString().slice(2)}`}</span>,
  },
  {
    // width:150,
    // align: 'center',
    className: 'classMate_ant-table-cell__TL53g',
    title: '成材率',
    dataIndex: 'score',
    key: "student_id",
  },
  {
    // width:150,
    // align: 'center',
    className: 'classMate_ant-table-cell__TL53g',
    title: '操作',
    key: 'student_id',
    render: (text: any) => (
      <Space size="middle">
        <span  >批改</span>
      </Space>
    ),
  },
];

const ClassMate: React.FC = () => {
  const { Class, Marking } = useStore();
  const [pageSize, UsePageSize] = useState<number>(10);
  const [current, UseCurrent] = useState<number>(1);
  const [uploadExcel, setUploadExcel] = useState<any>({data:[],columns:[]});
  // const [hoverIndex, setHoverIndex] = useState<string>(' ');

  useEffect(() => {
    Class.getClassmanage()
    Marking.getInitStudentAction()
  }, [Class, Marking])

  // 表单成功
  const onFinish = (values: any) => {
    console.log(values);
  };

  // Table 分页器的配置
  const paginationConfig = {
    pageSizeOptions: ['5', '10', '20', '50'],
    showSizeChanger: true,
    showQuickJumper: false,
    showTotal: () => `共${Marking.StudentList.length}条`,
    pageSize: pageSize,
    current: current,
    total: Marking.StudentList.length,
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

  const handleChange = () => {

  }

  const formItemLayout = {
    labelCol: { span: 4 },
    // wrapperCol: { span: 14 },
  };

  // 导入
  function excelInOut(e: any) {
    let file = e.target.files[0];
    let Render = new FileReader();
    Render.readAsArrayBuffer(file);

    Render.onload = function (e) {
      let buffer = new Uint8Array(e.target?.result as any)
      let workbook = xlsx.read(buffer, { type: 'array' });
      let worksheet = workbook.Sheets['身份和api接口关系']
      let data: any = xlsx.utils.sheet_to_json(worksheet);
      let columns: any[] = [];
      for (let key in data[0]) {
        columns.push({
          name: key,
          dataIndex: key
        })
      }
      let uploadExcel = {
        columns,
        data: data
      }
      setUploadExcel(uploadExcel);
    }

  }

  return useObserver(() =>
    (<div className={ClassMateCss.wrapper}>
      <div className={ClassMateCss.top}>
        <Form {...layout} name="nest-messages" {...formItemLayout} onFinish={onFinish} initialValues={{ status: '请选择', grade: '请选择' }} >
          <Row style={{ width: 800 }}>
            <Col style={{ width: 350 }}>
              <Form.Item name={['status']} label="状态" rules={[{ required: false }]} >
                <Select style={{ width: 200 }} onChange={handleChange}>
                  <Option value="0">0</Option>
                  <Option value="1">1</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item name={['grade']} label="班级" rules={[{ required: false }]} >
                <Select style={{ width: 200 }} onChange={handleChange}>
                  {
                    Class.classlist && Class.classlist.map((item: any) => {
                      return <Option key={item.grade_name} value={item.grade_name}>{item.grade_name}</Option>
                    })
                  }
                </Select>
              </Form.Item>
            </Col>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 20 }}>
              <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>  查询 </Button>
            </Form.Item>
          </Row>
        </Form>
      </div>
      <div className="context">
        <Table
          rowClassName={(record: any, index: number) => {
            return ''
          }}
          onRow={(row, index) => {
            return {
              onMouseEnter: event => {
                // console.log((event.target as any).parentNode)
                return;
              },
              onMouseLeave: event => {
                // console.log(row, index, 'onMouseLeave')
              }
            }
          }}

          columns={columns}
          dataSource={Marking.StudentList}
          pagination={paginationConfig}
          rowKey={(record) => record.student_id} />

        <Button type="primary" value="导入" ><input type="file" style={{ width: '50px' }} onChange={excelInOut} /></Button>
        <Table
          columns={uploadExcel.columns}
          dataSource={uploadExcel.data}
          // pagination={paginationConfig}
          rowKey={(record) => record.identity_api_authority_relation_id} />
      </div>
    </div>)
  )
}

export default ClassMate;