import Vue from 'vue'
import Router from 'vue-router'
import menus from '@/config/menu-config'
import AddNode from '@/components/AddNode'
import WebSSH from '@/components/WebSSH'

Vue.use(Router)

var routes = [
  {
    name: 'AddNode',
    id: 'addnode',
    icon: 'desktop',
    path: '/',
    component: AddNode,
    meta: {title: 'AddNode'}
  },
  {
    name: 'WebSSH',
    id: 'webssh',
    path: '/webssh',
    component: WebSSH,
    meta: {title: 'WebSSH'}
  },
]


export default new Router({routes})
