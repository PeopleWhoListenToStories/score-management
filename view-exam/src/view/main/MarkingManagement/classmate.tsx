import React, { useEffect } from "react";
import ClassMateCss from "./classMate.module.scss";
import useStore from "../../../context/useStore";
import { Form, Input, Select, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const ClassMate: React.FC = () => {
  const { Class } = useStore();
  useEffect(() => {
    Class.getClassmanage()

  })
  const onFinish = (values: any) => {
    console.log(values);
  };

  const handleChange = () => {

  }

  return <div className={ClassMateCss.wrapper}>
    <div className={ClassMateCss.top}>
      <Form {...layout} name="nest-messages" onFinish={onFinish} initialValues={{ status: '' }}>

        <Form.Item name={['status']} label="状态" rules={[{ type: 'email' }]}>
          <Select defaultValue="请选择" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
        </Form.Item>

        <Form.Item name={['garde']} label="班级" rules={[{ required: false }]}>
          <Select defaultValue="请选择" style={{ width: 120 }} onChange={handleChange}>
            {
              Class.classlist && Class.classlist.map((item:any) => {
                return <Option key={item.grade_name} value={item.grade_name}>{item.grade_name}</Option>
              })
            }
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>  查询 </Button>
        </Form.Item>
      </Form>
    </div>
    <div className={ClassMateCss.content}>

    </div>
  </div>
}

export default ClassMate;