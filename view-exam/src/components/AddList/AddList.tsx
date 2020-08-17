import React from 'react';
import { Button, Tag, Input, Select, Divider } from 'antd';
import styled from 'styled-components';
const { Option } = Select;

interface IItem {
  type: string,
  placeholder: string,
  name: string,
  list: string[]
}

interface IProps {
  title: string,
  list: any
}

const handleChange = (value: string, option: any) => {
  let { key, children, name } = JSON.parse(JSON.stringify(option));
  console.log(key, children, name)
  console.log(`selected ${value}${JSON.stringify(option)}`);

  switch (name) {

  }
}

// 确认
const onOk = () => {
  console.log('确认')
}

// 重置
const onReset = () => {
  console.log('重置')
}

export default function AddList(props: IProps) {
  return <AddListWrapper>
    <li>
      <Tag style={{ fontSize: '.07rem', padding: '0.03rem 0.07rem' }}>
        <span>{props.title}</span>
      </Tag>
    </li>
    {
      props.list && props.list.map((item: any, index: number) => {
        if (item.type === '1') {
          return <li key={index}> <Input name={item.name} placeholder={item.placeholder} />  </li>
        } else if (item.type === '2') {
          return <li key={index}>
            <Select
              style={{ width: 160 }}
              placeholder={item.placeholder}
              onChange={handleChange}
              dropdownRender={menu => (
                <div>
                  {menu}
                  <Divider style={{ margin: '4px 0' }} />
                </div>
              )}
            >
              {
                item.list && item.list.map((str: string, i: number) => {
                  return <Option key={i} name={item.name} value={str}>{str}</Option>
                })
              }
            </Select>
          </li>
        }else{
          return null;
        }
      })
    }

    <li>
      <Button type="primary" size='middle' onClick={() => { onOk() }}>确定</Button>
      <Button size='middle' style={{ marginLeft: '.1rem' }} onClick={() => { onReset() }}>重置</Button>
    </li>
  </AddListWrapper>
}

const AddListWrapper = styled.div`
  width:100%;
  height:100%;
  border-radius:0.03rem;
  padding:.1rem;
  border:.01rem solid #ccc;
  li {
    padding: .05rem 0 0.05rem 0;
  }
  ::after {
    width:100%;
    height:100%;
    context:'';
  }
`


