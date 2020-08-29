import React,{useState,useRef,useCallback,useEffect,} from 'react'
// import {Animated} from 'react-native'
import XLSX from 'xlsx'
import style from './export.module.css'
export default function Export(props:any){
    let [data,setdata]=useState<string>()

    // let [fadeAnim,setfadeAnim]=useState<any>(new Animated.Value(0))
    //拖拽npmstart
    let [translateX,settranslateX]=useState<number>(0)
    let [translateY,settranslateY]=useState<number>(0)
    let [root,setroot]=useState<any>({})
    const ref=useCallback(
         element=>element&&setroot(element),
         []
    )

    // useEffect(()=>Animated.timing(
      
    //   ).start())
    let small_down=(e:any)=> {
        console.log(e)
        console.log(root.parentNode)
        var obig = root.parentNode;
        var osmall = root;
        var e = e || window.event;
        /*用于保存小的div拖拽前的坐标*/
        osmall.startX = e.clientX - osmall.offsetLeft;
        osmall.startY = e.clientY - osmall.offsetTop;
        /*鼠标的移动事件*/
        document.onmousemove = function(e) {
          var e = e || window.event;
          osmall.style.left = e.clientX - osmall.startX + "px";
          osmall.style.top = e.clientY - osmall.startY + "px";
          /*对于大的DIV四个边界的判断*/
          let x=obig.offsetWidth-osmall.offsetWidth
          let y=obig.offsetHeight-osmall.offsetHeight
          if (e.clientX - osmall.startX <= 0) {
            osmall.style.left = 0 + "px";
          }
          if (e.clientY - osmall.startY <= 0) {
            osmall.style.top = 0 + "px";
          }
          if (e.clientX - osmall.startX >= x) {
            osmall.style.left = x + "px";
          }
          if (e.clientY - osmall.startY >= y) {
            osmall.style.top = y + "px";
          }
        };
        /*鼠标的抬起事件,终止拖动*/
        document.onmouseup = function() {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      }

    let importExcel=(file:any)=>{
        console.log(file)
        // let f=file.files[0];
        // console.log(f)
        // let reader=new FileReader();
        // let wb=XLSX.read(btoa(f))
        // let fil=JSON.stringify( XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]) );
        // setdata(fil)
    }
    return(
      <div className={style.bg}>
        
        <div className={style.box} ref={ref} onMouseDown={e => small_down(e)} style={{position:"absolute", left: `${translateX}px`,top:`${translateY}px`}}>
            {/* <div>
            <input type="file" onChange={(e)=>{importExcel(e.target)}} />
            </div> */}
            <div>
                {data}
            </div>
            <div className="kk">
              <h3>这是一个彩蛋</h3>
            </div>
        </div>
  
      </div>
    )
}