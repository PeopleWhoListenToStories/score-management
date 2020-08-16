import React from 'react'
import useStore from '../../../context/useStore'
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {useObserver} from 'mobx-react-lite'
export default function questionsType() {
    
    return (
        <div>
        
        <Button type="primary" icon={<PlusOutlined  />} size="middle">
          添加类型
        </Button>
        </div>
    )
}
