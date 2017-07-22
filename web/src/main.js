import Vue from 'vue';
import axios from 'axios';

import App from './App';
import router from './router';
import './config';

import Hello from './components/Hello';
import PageContent from './components/PageContent';

Vue.component('hello', Hello);
Vue.component('page-content', PageContent);

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: { App },
});

let Docs = Vue.component('app', App);
const handleSectionTheme = (currentRoute) => {
  let theme = 'blue';
  const name = currentRoute.name;

  if (name) {
    if (name === 'game') {
      theme = 'blue';
    } else if (name === 'lists') {
      theme = 'orange';
    } else if (name === 'my') {
      theme = 'green';
    } else if (name === 'error') {
      theme = 'red';
    }
  }

  Vue.material.setCurrentTheme(theme);
};

Docs = new Docs({
  el: '#app',
  router,
});

handleSectionTheme(router.currentRoute);

router.beforeEach((to, from, next) => {
  Vue.nextTick(() => {
    const mainContent = document.querySelector('.main-content');

    if (mainContent) {
      mainContent.scrollTop = 0;
    }

    Docs.closeSidenav();

    next();
  });
});

router.afterEach((to) => {
  handleSectionTheme(to);
});

localStorage.setItem('selectedId', '9e94e871bc75fab604f3c7872501c7ad07b3d87f');
localStorage.setItem('nameLists', JSON.stringify([{ id: '9e94e871bc75fab604f3c7872501c7ad07b3d87f', visibility: 0, title: 'NotB515', names: ['WildHunter', 'PrinceRedMoon', 'SymPy', 'Robert Z', 'Yun', 'Personal_GH'], namesString: 'WildHunter, PrinceRedMoon, SymPy, Robert Z, Yun, Personal_GH' }]));

// axios.defaults.baseURL = 'https://api.liuyun.me/random';
axios.defaults.baseURL = 'http://localhost:7000/random';
