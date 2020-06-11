import Vue from "vue";
import Vuex from "vuex";
import { applicationStateModule } from "./modules/app.state-module";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    message: "test message"
  },
  mutations: {
    changeMessage(state) {
      state.message = state.message + "1";
    }
  },
  actions: {},
  modules: {
    app: applicationStateModule
  }
});
//# sourceMappingURL=index.js.map
