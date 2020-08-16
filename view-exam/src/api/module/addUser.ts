import ajax from '../../utils/request';

// 展示身份数据
export const showIdentity = () => ajax.get('/user/identity')