import ajax from '../../utils/request'

// 获取当前用户信息
export const getUserInfo = () => ajax.get('/user/userInfo');

// 获取菜单列表接口
export const getMenuList = (user_id: string) => ajax.get(`/user/new`, { params: { user_id } })