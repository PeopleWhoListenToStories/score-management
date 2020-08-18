import ajax from '../../utils/request'

// 获取班级管理
export const getClassmanage = () => ajax.get('/manger/grade');

// 获取教室管理
export const getRoommanage = () => ajax.get('/manger/room');
