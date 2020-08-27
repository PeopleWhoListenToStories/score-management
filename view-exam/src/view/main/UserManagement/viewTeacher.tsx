import React, { useEffect, useState } from 'react'
import { Radio, Table, Button, Input } from 'antd';
import ViewTeacherCss from './viewTeacher.module.css';
import useStore from '../../../context/useStore'
import { useObserver } from 'mobx-react-lite'
import XLSX from 'xlsx'
const list = [
  {
    id: '1',
    type: '用户数据',
    action: 'showUserAction',
    list: 'UserList',
    key: 'user_id',
    colums: [
      {
        title: '用户名',
        dataIndex: 'user_name',
        key: 'user_id',
      },
      {
        title: '密码',
        dataIndex: 'user_pwd',
        key: 'user_id',
      },
      {
        title: '身份',
        dataIndex: 'identity_text',
        key: 'user_id'
      }
    ]
  }, {
    id: '2',
    type: '身份数据',
    action: 'showIdentityAction',
    list: 'IdentityList',
    key: 'identity_id',
    colums: [
      {
        title: '身份名称',
        dataIndex: 'identity_text',
      },
      {
        title: '身份id',
        dataIndex: 'identity_id',
      }
    ]
  }, {
    id: '3',
    type: 'api接口权限',
    action: 'showApiAuthorityAction',
    list: 'ApiAuthorityList',
    key: 'api_authority_id',
    colums: [
      {
        title: 'api权限名称',
        dataIndex: 'api_authority_text',
      },
      {
        title: 'api权限url',
        dataIndex: 'api_authority_url',
      },
      {
        title: 'api权限方法',
        dataIndex: 'api_authority_method',
      }
    ]
  }, {
    id: '4',
    type: '身份和api接口关系',
    action: 'showAuthorityRelationAction',
    list: 'AuthorityRelationList',
    key: 'identity_api_authority_relation_id',
    colums: [
      {
        title: '身份名称',
        dataIndex: 'identity_text',
      },
      {
        title: 'api权限名称',
        dataIndex: 'api_authority_text',
      },
      {
        title: 'api权限url',
        dataIndex: 'api_authority_url',
      },
      {
        title: 'api权限方法',
        dataIndex: 'api_authority_method',
      }
    ]
  }, {
    id: '5',
    type: '视图接口权限',
    action: 'showViewAuthorityAction',
    list: 'ViewAuthorityList',
    key: 'view_authority_id',
    colums: [
      {
        title: '视图名称',
        dataIndex: 'view_authority_text',
      },
      {
        title: '视图id',
        dataIndex: 'view_id',
      }
    ],
  }, {
    id: '6',
    type: '身份和视图权限关系',
    action: 'showIdentityViewAuthorityRelationAction',
    list: 'IdentityViewAuthorityRelationList',
    key: 'identity_view_authority_relation_id',
    colums: [
      {
        title: '身份',
        dataIndex: 'identity_text'
      },
      {
        title: '视图名称',
        dataIndex: 'view_authority_text',
      },
      {
        title: '视图id',
        dataIndex: 'view_id',
      }
    ]
  }
]

export default function ViewTeacher() {
  const { AddUserStore } = useStore();

  const [curIndex, setCurIndex] = useState<number>(0);
  let [uploadExcel, setUploadExcel] = useState<{data:any[], columns:any[]}>({data:[], columns:[]});
  useEffect(() => {
    AddUserStore[list[curIndex].action]();
  }, [AddUserStore,curIndex])

  // 切换下标
  const onChange = (index: string) => {
    setCurIndex(Number(index));
  }
  function exportExcel(){
    (window as any)._hmt.push(['_trackEvent', '页面管理', 'click', '导出']);
    //1.生成worksheet
    let ws=XLSX.utils.json_to_sheet(AddUserStore[list[curIndex].list]);
    let wb=XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,list[curIndex].id)
    XLSX.writeFile(wb,'用户管理.xlsx')

  }
  function importExcel(e:React.ChangeEvent<HTMLInputElement>){
    (window as any)._hmt.push(['_trackEvent', '页面管理', 'click', '引入']);
    if(e.target.files){
      let file=e.target.files[0];
      let reader=new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = function(e){
          let buffer = new Uint8Array(e.target?.result as unknown as number);
          var workbook = XLSX.read(buffer, {type: 'array'});
          console.log('workbook...', workbook);
          let worksheet = workbook.Sheets['123'];
          let data:any [] = XLSX.utils.sheet_to_json(worksheet);
          let columns = [];
          for (let key in data[0]){
              columns.push({
                  name: data[0][key],
                  dataIndex: key
              })
          }
          let uploadExcel = {
              columns,
              data: data
          }
          setUploadExcel(uploadExcel);
          console.log('data...', uploadExcel);
      }
    }

  }

  return useObserver(() => (
    <div className={ViewTeacherCss.ViewTeacher}>
      {/* 头部tab */}
      <div>
        <Radio.Group onChange={(e) => { onChange(e.target.value) }} defaultValue={0}>
          {
            list && list.map((item: any, index: number) => {
              return <Radio.Button value={index} key={index}>{item.type}</Radio.Button>
            })
          }
        </Radio.Group>
      </div>
      <Button type='primary' onClick={exportExcel}>导出</Button>
      <Button type='primary'>
        <Input type='file' placeholder='导入表格' onChange={importExcel} />
      </Button>
      {/* 提示标签 */}
      <h2>{list[curIndex].type}</h2>
      {/* 表格 */}
      <Table columns={list[curIndex].colums} dataSource={AddUserStore[list[curIndex].list]} rowKey={list[curIndex].key} />
      <img src="" alt=""/>
    </div>)
  )
}




