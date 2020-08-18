import React from 'react';
import { Button, Tag, Input, Select, Divider } from 'antd';
import styled from 'styled-components';
const { Option } = Select;

interface IItem {
  type: string,
  placeholder: string,
  name: string,
  list: any[],
}

interface IProps {
  list: any,
  navList: any[],
  okBtn: (e: any) => void,
}

interface IDefaultVal {
  [key: string]: any
}

const defaultVal: IDefaultVal = {
  defaultIndex: 0
}

export default function AddList(props: IProps) {
  console.log(props, 'addIdentityName', props.list[defaultVal.defaultIndex].list)


  const handleChange = (val: string, option: any) => {
    let { key, value, children, name, url, view_id, method } = JSON.parse(JSON.stringify(option));
    console.log(key, value, children, name, url, view_id, method)
    console.log(`selected ${val}${JSON.stringify(option)}`);
    switch (name) {
    }
  }


  // 切换高亮
  function handleTagIndex(index: number, props: any) {
    defaultVal.defaultIndex = index;
    console.log(defaultVal.defaultIndex, props)
  }

  // 修改input 框
  function handleInputText(e: any) {
     defaultVal[e.target.name] = e.target.value;
  }


  // 确认
  function onOk() {
    console.log('确认');
    props.okBtn(defaultVal)
  }

  // 重置
  const onReset = () => {
    Object.keys(defaultVal).forEach((item: any) => {
      defaultVal[item] = '';
    })
  }

  return <AddListWrapper>

    <li>
      {
        props.navList && props.navList.map((item: any, index: number) => {
          return <Tag style={{ fontSize: '.07rem', padding: '0.03rem 0.07rem' }} key={index}>
            <span onClick={() => { handleTagIndex(index, props) }}>{item.title}</span>
          </Tag>
        })
      }
    </li>
    {
      props.list[defaultVal.defaultIndex].list && props.list[defaultVal.defaultIndex].list.map((item: any, index: number) => {
        console.log(Object.keys(defaultVal).find(defaultKey => defaultKey === item.name),"111111111111222222222222")
        {
          if (item.type === '1') {
            return <li key={index}> <Input name={item.name} placeholder={item.placeholder} value={ Object.keys(defaultVal).find(defaultKey => defaultKey === item.name) } onChange={(e) => { handleInputText(e) }} />  </li>
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
                  item.list && item.list.map((v: any, index: number) => {
                    return <Option key={v.id} name={item.name} value={v.text}>{v.text}</Option>
                  })
                }
              </Select>
            </li>
          } else {
            return null;
          }
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


