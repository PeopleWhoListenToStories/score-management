import ajax from '../../utils/request';

// 展示用户数据
export const showUser = () => ajax.get('/user/user');

// 展示身份数据
export const showIdentity = () => ajax.get('/user/identity');

// 获取视图权限数据
export const showViewAuthority = () => ajax.get('/user/view_authority');

// 展示身份和api权限关系
export const showAuthorityRelation = () => ajax.get('/user/identity_api_authority_relation');

// 展示身份和视图权限关系
export const showIdentityViewAuthorityRelation = () => ajax.get('/user/identity_view_authority_relation');

// 给身份设定视图权限
export const setIdentityView = (identity_id: string, view_authority_id: string) => ajax.post('/user/setIdentityView', { identity_id, view_authority_id })

// 展示接口权限数据
export const showApiAuthority = () => ajax.get('/user/api_authority')