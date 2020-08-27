import React, { useState, useEffect } from 'react';
import styles from './SetUp.module.css'
import { useObserver } from "mobx-react-lite"
import { useHistory } from "react-router-dom"
import { Input, Form, Button, Avatar, Upload, Select, Modal } from 'antd';
import useStore from '../../context/useStore'
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

const SetUpApp: React.FC = () => {

  return useObserver(() => <div className={styles.SetUp}>
   
  </div >)
}

export default SetUpApp;