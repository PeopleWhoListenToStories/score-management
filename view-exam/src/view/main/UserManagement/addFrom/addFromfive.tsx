import React, { useEffect } from 'react'
import { useObserver } from 'mobx-react-lite';
import AddCss from '.././addTeacher.module.css';
import { Layout, Tag, Form, Button, Select } from 'antd';
import userStore from '../../../../context/useStore'
export default function () {
    const { Option } = Select;
    const { useForm } =Form;
    const { AddUserStore } = userStore();
    useEffect(() => {
        AddUserStore.showApiAuthorityAction();
        AddUserStore.showIdentityAction();
    })
  const [addConsumerFrom] =useForm()
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    function onFinish(values: any) {
        AddUserStore.setIdentityViewAction(values.user.identity_id, values.user.identity_id.view_authority_id)
};
    return useObserver(() => (
        <div className={AddCss.addTeacher}>
            <div className={AddCss.item}>
                <Layout>
                    <Form name="nest-messages" {...layout} onFinish={onFinish} form={addConsumerFrom}>
                        <Tag style={{ fontSize: '.07rem', padding: '0.03rem 0.07rem' }}  >
                            <span>给身份设置api接口权限 </span>
                        </Tag>
                        <Form.Item name={['user','api_authority_id']}  rules={[{ required: true }]}>
                            <Select placeholder="选择api接口权限">
                                {
                                     AddUserStore.ApiAuthorityList.map((item: any) => {
                                        return (
                                            <Select.Option value={item.api_authority_text} key={item.api_authority_id} >{item.api_authority_text}</Select.Option>
                                        )
                                    })
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item name={['user','identity_id']}  rules={[{ required: true }]}>
                            <Select placeholder="选择身份id">
                                {
                                    AddUserStore.IdentityList && AddUserStore.IdentityList.map((v: any, index: number) => {
                                        return <Option key={v.identity_id} value={v.identity_text}>{v.identity_text}</Option>
                                    })
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item
                        >
                            <Button type="primary" htmlType="submit" style={{marginRight: 20, width: 100, backgroundImage: `linear-gradient(90deg, #023AFD, #4E75FF)`}}>
                                确定
                            </Button>
                            <Button size='middle' style={{ marginLeft: '.1rem' }} onClick={()=>{addConsumerFrom.resetFields()}}>
                                重置
                            </Button>
                         </Form.Item>
                    </Form>
                </Layout>
            </div>
        </div>
    )
    )
}
