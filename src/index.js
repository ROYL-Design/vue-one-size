import OneSizeContainer from './component.vue'

export default {
  install: function (Vue) {
    Vue.component('OneSizeContainer', OneSizeContainer)
  },
  container: OneSizeContainer
}
