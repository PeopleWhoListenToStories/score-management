import React, { useState, useCallback, useEffect ,useRef} from 'react'
import { CaretRightFilled, PauseCircleFilled } from '@ant-design/icons'

export default function Music() {
    let [root, setroot] = useState<any>()
    const useRef1:any = useRef()
    const ref = useCallback(
        element => element && setroot(element),
        []
    )
    let [isplay, setisplay] = useState<boolean>(false)
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
        useRef1.current.autoplay = true
    }, [])
    let play = () => {
        setisplay(!isplay)
    }
    return (
        <div className='music'>
            {
                isplay ? <span onClick={() => { play() }}><PauseCircleFilled /></span> : <span onClick={() => { play() }}><CaretRightFilled /></span>
            }


            <audio ref={useRef1}  src='https://win-web-nf01-sycdn.kuwo.cn/efe0823488f4700f843337022f810e99/5f47b0d2/resource/n3/60/83/3770030867.mp3' autoPlay ></audio>
        </div>
    )
}