import Cookie from 'js-cookie';

export const getCookie = (key: string) => {
  Cookie.get(key)
}

export const setCookie = (key: string, value: string) => {
  Cookie.set(key, value)
}

export const removeCookie = (key: string) => {
  Cookie.remove(key)
}