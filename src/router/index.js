import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import nuggets from '@/views/nuggets'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'nuggets',
      component: nuggets
    }
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
