import React, { useEffect, useState } from "react";
import useStore from "../context/useStore"

const IsLogin: React.FC = (Com: any) => {

  const [isLogin, setIsLogin] = useState<boolean>(false);
  const {MainStore} = useStore();
  useEffect(()=>{
    console.log(MainStore)
  })

  return <div>
    isLogin ? <Com ></Com>: <></>
  </div>
}

export default IsLogin