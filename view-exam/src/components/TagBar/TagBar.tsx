import React from 'react';
import { useObserver } from 'mobx-react-lite'
import { Link } from "react-router-dom"
import styles from './TagBar.module.css'
import useStore from '../../context/useStore'
import { Tag } from 'antd';
import {
  FacebookOutlined
} from '@ant-design/icons';

const TabBar: React.FC = () => {

  const { MainStore } = useStore();

  // function log(e: any) {
  //   console.log(e)
  // }

  return useObserver(() => <div className={styles.TabBar}>
    {
      MainStore.TagList && MainStore.TagList.map((item: any) => {
        return <Tag key={item.path} closable onClose={() => { MainStore.removePathAction(item.path) }} icon={<FacebookOutlined />} color="#3b5999"> <Link to={item.path}>{item.name}</Link>  </Tag>
      })
    }
  </div>)
}

export default TabBar;