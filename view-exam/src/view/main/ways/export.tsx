import React,{useState} from 'react'
import XLSX from 'xlsx'
export default function Export(){
    let [data,setdata]=useState<string>()
    let importExcel=(file:any)=>{
        let f=file.files[0];
        console.log(f)
        // let reader=new FileReader();
        // let wb=XLSX.read(btoa(f))
        // let fil=JSON.stringify( XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]) );
        // setdata(fil)
    }
    return(
        <div>
            <div>
            <input type="file" onChange={(e)=>{importExcel(e.target.value)}} />
            </div>
            <div>
                {data}
            </div>
        </div>
    )
}