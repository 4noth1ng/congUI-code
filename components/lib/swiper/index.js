import Swiper from './src/main.vue'
Swiper.install = function (Vue) {
  Vue.component(Swiper.name, Swiper)
}
export default Swiper