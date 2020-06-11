import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";

Vue.config.productionTip = false;

Axios.defaults.baseURL = "https://localhost:44313/api/";

Vue.filter('capitalize', (value: string) => {
  return value.toUpperCase();
});

Vue.filter('lower', (value: string) => {
  return value.toLowerCase();
});

const changeColor = function(el: any) {
  const letters = "123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  el.style.backgroundColor = color;
}

// Vue.directive('color-letter', {
//   bind: changeColor,
//   update: changeColor
// })

Vue.directive('color-letter', {
  bind: function(el) {
    el.onchange = () => changeColor(el);
  },
  // update: changeColor
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
