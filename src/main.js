import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Links from './components/Links'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Home from './components/Home.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
const routes = [
  { path: '/projects', component: Projects },
  { path: '/links', component: Links },
  { path: '/contact', component: Contact},
  { path: '/', component: Home}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
