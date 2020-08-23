import React from 'react';

export interface IMenuItem {
  name: string,
  meta?: {
    icon: any,
    name: string,
    show: boolean
  },
  redirect?: string,
  children: Array<{
    path: string,
    redirect?:string,
    meta?: {
      component: any,
      name: string,
      icon?: any,
      show: boolean
    }
  }>
}

export interface IRouerItem {
  path?: string,
  name?: string,
  redirect?: string,
  component?: any,
  children?: IRouerItem[],
  meta: {
    icon?: any,
    name: string,
    show: boolean,
    component: any
  }
}