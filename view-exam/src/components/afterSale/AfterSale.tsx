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
  //拖拽
  let [data, setdata] = useState<string>()
  let [translateX, settranslateX] = useState<number>(0)
  let [translateY, settranslateY] = useState<number>(0)
  let [root, setroot] = useState<any>({})
  const sectionRef: any = useRef();

  const { MainStore } = useStore();

  // const socket = io('http://10.4.161.2:5000/', {
  //   reconnectionAttempts: 10,
  //   query: {
  //     uid: '1'
  //   }
  // })

  function log() {
    MainStore.changeAfterSaleVisable(false)
  }

  function btnFn(e: any) {
    MainStore.changeMessageFlag(false); // 修改通知信息图标开关
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
    MainStore.changeMessageFlag(false); // 修改通知信息图标开关
  })

  useEffect(() => {
    socket.emit('messageOn')
    // 接收消息
    socket.on('message', (res: any) => {
      console.log(res)
      MainStore.changeMessageFlag(true); // 修改通知信息图标开关
      setList(res.data.slice(0, -1))
      if (sectionRef.current) {
        sectionRef.current.scrollTop = ((sectionRef.current?.childNodes.length + 1) * sectionRef.current.firstChild.offsetHeight)
      }
      // res返回格式有前后端自己协定
      if (res.status === 200) {
        console.log(res, "res")
      }
    })
  }, [])


  const afterSaleRef = useCallback(
    element => element && setroot(element),
    []
  )
  let small_down = (e: any) => {
    var obig = root.parentNode;
    var osmall = root;
    var e = e || window.event;
    /*用于保存小的div拖拽前的坐标*/
    osmall.startX = e.clientX - osmall.offsetLeft;
    osmall.startY = e.clientY - osmall.offsetTop;
    /*鼠标的移动事件*/
    document.onmousemove = function (e) {
      var e = e || window.event;
      osmall.style.left = e.clientX - osmall.startX + "px";
      osmall.style.top = e.clientY - osmall.startY + "px";
      /*对于大的DIV四个边界的判断*/
      let x = obig.offsetWidth - osmall.offsetWidth
      let y = obig.offsetHeight - osmall.offsetHeight
      if (e.clientX - osmall.startX <= 250) {
        osmall.style.left = 250 + "px";
      }
      if (e.clientY - osmall.startY <= 0) {
        osmall.style.top = 0 + "px";
      }
      if (e.clientX - osmall.startX >= (x + 250)) {
        osmall.style.left = x +250 + "px";
      }
      if (e.clientY - osmall.startY >= y) {
        osmall.style.top = y + "px";
      }
    };
    /*鼠标的抬起事件,终止拖动*/
    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  }

  return <div className={styles.AfterSale} ref={afterSaleRef}   onMouseDown={e => small_down(e)} style={{position:"absolute", left: `${translateX + 200}px`,top:`${translateY+200}px`}}  >
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
      <Button onClick={() => { setList([]); setCurVal(undefined) }}>清空</Button>
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