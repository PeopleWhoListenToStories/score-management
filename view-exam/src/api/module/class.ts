import ajax from '../../utils/request'


// 获取班级管理
export const getClassmanage = () => ajax.get('/manger/grade');

// 获取教室管理
export const getRoommanage = () => ajax.get('/manger/room');

// 删除教室
export const deleteRoom = (room_id:string) => ajax.delete('/manger/room/delete',{data:{room_id}});

// 添加教室
export const addRoom = (room_text:string) => ajax.post('/manger/room',{room_text});


// 添加班级
export const addClass = (grade_name:string,room_id:string,subject_id:string) => ajax.post('/manger/grade',{grade_name,room_id,subject_id});


// 删除教室
export const deleteclass = (room_id:string) => ajax.delete('/manger/grade/delete',{data:{room_id}});
// 已分班学生
export const already = () => ajax.get('/manger/student/new');

// 删除学生
export const delStu = (student_id:string) => ajax.delete('/manger/student/:id=>student_id',{data:{student_id}});
