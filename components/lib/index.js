import Demo from './demo'
import Card from './card'
import Swiper from './swiper'
import pagination  from './pagination'
import Button from './button'
import DatePicker from './datepicker'
const components = {
  Demo,
  Card,
  Swiper,
  pagination,
  Button,
  DatePicker
}
const install = function (Vue) {
  if (install.installed) return
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

export {
  install,
  Demo,
  Card,
  Swiper,
  DatePicker,
  pagination,
  Button
}

export default {
  install,
  Demo,
  Card,
  Swiper,
  DatePicker,
  pagination,
  Button
}

