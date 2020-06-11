import Vue from "vue";
import Vuex from "vuex";
import { applicationStateModule } from "./modules/app.state-module";
import { BaseState } from "./base-state.interface";
import { questionsStateModule } from "./modules/questions.state-module";

Vue.use(Vuex);

export default new Vuex.Store<BaseState>({
  state: {
    message: "test message"
  },
  mutations: {
    changeMessage(state) {
      state.message = state.message + "1";
    }
  },
  actions: {},
  getters: {
    message: state => {
      return state.message;
    }
  },
  modules: {
    app: applicationStateModule,
    questions: questionsStateModule
  }
});
