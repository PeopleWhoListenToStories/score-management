import ajax from '../../utils/request';

// 展示用户数据
export const showUser = () => ajax.get('/user/user');

// 展示身份数据
export const showIdentity = () => ajax.get('/user/identity');

// 获取视图权限数据
export const showViewAuthority = () => ajax.get('/user/view_authority');

// 展示身份权限数据
export const showAuthorityRelation = (groupid:number) => ajax.get('/user/identity_api_authority_relation', { params: { groupid } });

// 给身份设定视图权限
export const setIdentityView = (identity_id: string, view_authority_id: string) => ajax.post('/user/setIdentityView', { identity_id, view_authority_id })

// 展示接口权限数据
export const showApiAuthority = () => ajax.get('/user/api_authority')