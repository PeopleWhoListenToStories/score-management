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

// 展示接口权限数据
export const showApiAuthority = () => ajax.get('/user/api_authority')

// 给身份设定视图权限
export const setIdentityView = (identity_id: string, view_authority_id: string) => ajax.post('/user/setIdentityView', { identity_id, view_authority_id })

// 给身份设定api接口权限
export const setIdentityApi = (identity_id: string, api_authority_id: string) => ajax.post('/user/setIdentityApi', { identity_id, api_authority_id })

// 添加用户
export const addUser = (user_name: string, user_pwd: string, identity_id: string) => ajax.post('/user', { user_name, user_pwd, identity_id })

// 添加身份
export const addIdentity = (identity_text: string) => ajax.get('/user/identity/edit', { params: { identity_text } })

// 添加api接口权限
export const addAuthorityApi = (api_authority_text: string, api_authority_url: string, api_authority_method: string) => ajax.get('/user/authorityApi/edit', { params: { api_authority_text, api_authority_url, api_authority_method } })

// 添加视图权限
export const addAuthorityView = (view_authority_text: string, view_id: string) => ajax.get('/user/authorityView/edit', { params: { view_authority_text, view_id } })