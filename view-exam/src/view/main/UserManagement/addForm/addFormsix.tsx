import React from 'react'
import { useObserver } from 'mobx-react-lite'
import useStore from '../../../../context/useStore'
import {
    Form,
    Select,
    Button,
    Tag,
} from 'antd';
const { Option } = Select;
export default function AddFormSix() {

    const { AddUserStore } = useStore();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        AddUserStore.setIdentityApiAction(values.select1, values.select2)
    };
    const [form] = Form.useForm();
    const onReset = () => {
        form.resetFields();
    };
    return useObserver(() =>
        <div className="form_six">
            <Tag style={{ fontSize: '.07rem', padding: '0.03rem 0.07rem' }}  >
                <span>给身份设置api接口权限 </span>
            </Tag>
            <Form
                name="register"
                onFinish={onFinish}
                form={form}

            >
                <Form.Item
                    name="select1"
                    rules={[{ required: true }]}
                >
                    <Select allowClear
                        placeholder="选择身份id"
                    >
                        {
                            AddUserStore.IdentityList && AddUserStore.IdentityList.map((v: any, index: number) => {
                                return <Option key={v.identity_id} value={v.identity_id}>{v.identity_text}</Option>
                            })
                        }
                    </Select>
                </Form.Item>

                <Form.Item
                    name="select2"
                    rules={[{ required: true }]}
                >
                    <Select allowClear
                        placeholder="请给身份设置视图权限"
                    >
                        {
                            AddUserStore.ViewAuthorityList && AddUserStore.ViewAuthorityList.map((v: any, index: number) => {
                                return <Option key={v.view_authority_id} value={v.view_authority_id}>{v.view_authority_text}</Option>
                            })
                        }
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button htmlType="submit" style={{ backgroundImage: "linear-gradient(to right,blue,skyblue)" }}>
                        确定
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        重置
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}