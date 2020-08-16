import React from 'react'
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
export default function questionsType() {
    
    return (
        <div>
        
        <Button type="primary" icon={<PlusOutlined  />} size="middle">
          添加类型
        </Button>
        </div>
    )
}
