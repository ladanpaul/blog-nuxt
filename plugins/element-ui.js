// import 'element-ui/lib/theme-chalk/index'
import Vue from 'vue'
import Button from 'element-ui/lib/button'
import Menu from 'element-ui/lib/menu'
import MenuItem from 'element-ui/lib/menu-item'
import Main from 'element-ui/lib/main'
import Container from 'element-ui/lib/container'
import Header from 'element-ui/lib/header'

const components = [
  Button,
  Menu,
  MenuItem,
  Main,
  Container,
  Header
]

components.forEach((Component) => {
  if (typeof Component.install === 'function') {
    Vue.use(Component)
  } else if (Component.name) {
    Vue.component(Component.name, Component)
  } else {
    console.error('Unable to register component', Component)
  }
})
