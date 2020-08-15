import {createContext} from 'react';
import store from '../store/index'
console.log(store,"store")

export default createContext(store)