import axios from "axios";
import { BaseState } from "../base-state.interface";
import { Module } from "vuex";
import { Question } from "@/models/Questions";
import Participant from "@/models/Participant";

export interface QuestionsState {
  loading: boolean;
  failed: boolean;
  success: boolean;
  questions: Array<Question>;
}

const INITIAL_STATE: QuestionsState = {
  loading: false,
  failed: false,
  success: false,
  questions: []
};

export const questionsStateModule: Module<QuestionsState, BaseState> = {
  namespaced: true,
  state: INITIAL_STATE,
  mutations: {
    setQuestions(state, questions) {
      state.questions = questions;
    },
    setLoading(state) {
      state.loading = true;
      state.success = false;
      state.failed = false;
    },
    setSuccess(state) {
      state.loading = false;
      state.success = true;
      state.failed = false;
    },
    setFailed(state) {
      state.loading = false;
      state.success = false;
      state.failed = true;
    },
    deleteQuestion(state, questionId: number) {
      state.questions = state.questions.filter(q => q.id != questionId);
    },
    addQuestion(state, question: Question) {
      state.questions.push(question);
    },
    updateQuestion(state, question: Question) {
      const index = state.questions.findIndex(q => q.id === question.id);
      if (index >= 0) {
        state.questions[index] = question;
        state.questions = [...state.questions];
      }
    }
  },
  actions: {
    load({ commit }) {
      axios.get("Questions").then(response => {
        commit("setQuestions", response.data as Question[]);
      });
    },
    delete({ commit }, questionId: number) {
      axios.delete(`Questions/${questionId}`).then(() => {
        commit("deleteQuestion", questionId);
      });
    },
    add({ commit }, question: Question) {
      axios.post("Questions", question).then(response => {
        const newQuestions = response.data as Question;
        commit("addQuestion", newQuestions);
      });
    },
    update({ commit }, question: Question) {
      axios.put(`Questions/${question.id}`, question).then(() => {
        commit("updateQuestion", question);
      });
    }
  },
  getters: {
    questionAtIndex: state => (index: number) => {
      return state.questions.length > index ? state.questions[index] : null;
    },
    questionById: state => (id: number) => {
      return state.questions.find(q => q.id === id);
    },
    questions: state => {
      return state.questions;
    },
    currentQuestion: (state, getters, rootState, rootGetters) => {
      const participant = rootGetters["app/participant"] as Participant;
      if (
        participant &&
        state.questions &&
        state.questions.length > 0 &&
        participant.questionsAnswered < state.questions.length
      ) {
        return state.questions[participant.questionsAnswered];
      }
      return null;
    }
  }
};
