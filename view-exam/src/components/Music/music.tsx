import React, { useState, useCallback, useEffect, useRef } from 'react'
import { CaretRightFilled, PauseCircleFilled } from '@ant-design/icons'

export default function Music() {
    let [root, setroot] = useState<any>()
    const useRef1: any = useRef()
    const ref = useCallback(
        element => element && setroot(element),
        []
    )
    let [isplay, setisplay] = useState<boolean>(true)
    let [musicData, setmusicData] = useState<any[]>([
        {
            music: "爱的就是你.mp3",
        },
        {
            music: "你的承诺.mp3",
        },
    ])
    let [curIndex, setcurIndex] = useState<number>(0)
    useEffect(() => {
        useRef1.current.autoplay = true;
    }, [])
    let play = () => {
        if (useRef1.current.paused) {
            useRef1.current.play();
        } else {
            useRef1.current.pause();
        }
        setisplay(!isplay)

    }
    return (
        <div className='music'  >
            {
                isplay ? <span onClick={() => { play() }}><PauseCircleFilled /></span> : <span onClick={() => { play() }}><CaretRightFilled /></span>
            }


            <audio ref={useRef1} src='https://webfs.yun.kugou.com/202008290934/258554c6a2f3fed2ecdd92884fabfb74/part/0/961026/G209/M04/15/1B/sZQEAF5yIAGABKyMADz-g6dtNsQ387.mp3' autoPlay ></audio>
        </div>
    )
}