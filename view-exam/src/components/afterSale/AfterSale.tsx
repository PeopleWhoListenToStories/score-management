import React, { useState, useRef, useEffect } from "react";
import styles from "./AfterSale.module.scss";
import io from 'socket.io-client'
import useStore from '../../context/useStore'

import { Button, Input, Tag  } from 'antd'

const AfterSale: React.FC = () => {
  const [value, setValue] = useState<string>('')
  const [list, setList] = useState<any[]>([])
  const [curVal, setCurVal] = useState<string>();
  const [btnDisable, setBtnDisable] = useState<boolean>(false);

  const sectionRef: any = useRef();
  const { MainStore } = useStore();

  const socket = io('http://localhost:5000/', {
    reconnectionAttempts: 10,
    query: {
      uid: '1'
    }
  })

  function log () {
   MainStore.changeAfterSaleVisable(false)
  }

  function btnFn(e: any) {
    setBtnDisable(true)
    let timer = setTimeout(() => {
      setBtnDisable(false)
    }, 2500)
    // 发送消息
    socket.emit('messageOn', { user: MainStore.user_info.user_name, msg: value })
    setCurVal(value)
    setValue('')
    return () => clearTimeout(timer);
  }

  // 接收消息
  socket.on('send', (res: any) => {
    setList(res.data.slice(0, -1))
    sectionRef.current.scrollTop = (sectionRef.current.childNodes.length + 1) * sectionRef.current.firstChild.offsetHeight
    console.log(list)
    // res返回格式有前后端自己协定
    if (res.status === 200) {
      console.log(res, "res")
    }
  })
 
  return <div className={styles.AfterSale}>
    <nav>售后聊天工作室 
      <Tag closable onClose={log}></Tag></nav>
    <section ref={sectionRef}>
      {
        list.map((item, index) => {
          return <li className="left" key={index} ><label>{item.user}  </label>:<span>{item.msg}</span></li>
        })
      }
      <li className="right"><span>{curVal}</span></li>
    </section>
    <div className="add">
      <Input type="text" style={{ width: '50%' }} placeholder="输入您想说的话" value={value} onChange={(e) => { setValue(e.target.value) }} />
      <Button disabled={btnDisable} onClick={btnFn}>发送</Button>
      <Button onClick={()=>{setList([]);setCurVal('')}}>清空</Button>
    </div>
  </div>
}

export default AfterSale