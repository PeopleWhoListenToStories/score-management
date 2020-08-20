import React from 'react'
import { useObserver } from 'mobx-react-lite';

import AddFromfive from './addFrom/addFromfive'
export default function () {
  return useObserver(()=>
    <div>
        <AddFromfive></AddFromfive>
    </div>
  )
}
