import pagination from './src/main.vue'
pagination.install = function (Vue) {
  Vue.component(pagination.name, pagination)
}
export default pagination