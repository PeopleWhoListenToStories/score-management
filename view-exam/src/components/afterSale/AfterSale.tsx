import React, { useState, useCallback, useMemo, useEffect, useRef } from "react";
import styles from "./AfterSale.module.scss";
import io from 'socket.io-client'
import moment from 'moment'
import useStore from '../../context/useStore'
import { Button, Input, Tag } from 'antd'

const socket = io('http://10.4.161.2:5000/');

const AfterSale: React.FC = () => {
  const [value, setValue] = useState<string>('')
  const [list, setList] = useState<any[]>([])
  const [curVal, setCurVal] = useState<string>();
  const [btnDisable, setBtnDisable] = useState<boolean>(false);

  const sectionRef: any = useRef();
  const afterSaleRef: any = useRef();

  const { MainStore } = useStore();

<<<<<<< HEAD
  const socket = io('http://10.4.161.2:5000/', {
    reconnectionAttempts: 10,
    query: {
      uid: '1'
    }
  })
=======
  // const socket = io('http://10.4.161.2:5000/', {
  //   reconnectionAttempts: 10,
  //   query: {
  //     uid: '1'
  //   }
  // })
>>>>>>> 8d7236e45c5aae6e68fe7cc4b5d17e5df8dd7d76

  function log() {
    MainStore.changeAfterSaleVisable(false)
  }

  function btnFn(e: any) {
    setBtnDisable(true)
    let timer = setTimeout(() => {
      setBtnDisable(false)
    }, 2500)
    // 发送消息
    socket.emit('messageOn', { user: MainStore.user_info.user_name, msg: value, time: Date.now() * 1 })
    setCurVal(value)
    setValue('')
    return () => clearTimeout(timer);
  }

  useEffect(() => {
    socket.emit('messageOn')

    // 接收消息
    socket.on('message', (res: any) => {
      console.log(res)
      setList(res.data.slice(0, -1))
      sectionRef.current.scrollTop = (sectionRef.current.childNodes.length + 1) * sectionRef.current.firstChild.offsetHeight
      // res返回格式有前后端自己协定
      if (res.status === 200) {
        console.log(res, "res")
      }
    })
  }, [])


  return <div className={styles.AfterSale} ref={afterSaleRef}   >
    <nav>售后聊天工作室
      <Tag closable onClose={log}></Tag></nav>
    <section ref={sectionRef}>
      {
        list.map((item, index) => {
          return <li className="left" key={index} >
            <p> {item.user} : {moment(item.time).format('YYYY-MM-DD HH:mm:ss')}</p>
            <p><span>{item.msg}</span></p>
          </li>
        })
      }
      <li className="right"><span>{curVal}</span></li>
    </section>
    <div className="add">
      <Input type="text" style={{ width: '50%' }} placeholder="输入您想说的话" value={value} onChange={(e) => { setValue(e.target.value) }} />
      <Button disabled={btnDisable} onClick={btnFn}>发送</Button>
      <Button onClick={() => { setList([]); setCurVal('') }}>清空</Button>
    </div>
  </div>
}

export default AfterSale

// const styles = useMemo(() => ({
//   cursor: state.isDragging ? '-webkit-grabbing' : '-webkit-grab',
//   transform: `translate(${state.translation.x}px, ${state.translation.y}px)`,
//   transition: state.isDragging ? 'none' : 'transform 500ms',
//   zIndex: state.isDragging ? 2 : 1,
//   position: state.isDragging ? 'absolute' : 'relative'
// }), [state.isDragging, state.translation]);