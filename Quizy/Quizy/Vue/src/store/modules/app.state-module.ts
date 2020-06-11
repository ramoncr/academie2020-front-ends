import Participant from "../../models/Participant";
import { Module } from "vuex";
import Axios from "axios";
import router from "@/router";
import { BaseState } from "../base-state.interface";

export interface AppState {
  loading: boolean;
  failed: boolean;
  success: boolean;
  participant: Participant | null;
}

export const GET_PARTICIPANT = "participant";
export const GET_IS_PARTICIPANT_SET = "isParticipantSet";

export const applicationStateModule: Module<AppState, BaseState> = {
  namespaced: true,
  state: {
    loading: false,
    failed: false,
    success: false,
    participant: null
  },
  mutations: {
    setParticipant(state, participant) {
      state.participant = participant;
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
    clear(state) {
      state.failed = false;
      state.success = false;
      state.loading = false;
      state.participant = null;
      router.push({ path: "/" });
    },
    handleAnswer(state, score) {
      if (state.participant) {
        state.participant.score += score;
        state.participant.questionsAnswered++;
      }
    }
  },
  actions: {
    setParticipant({ commit }, participant: Participant) {
      if (participant) {
        localStorage.setItem("currentParticipant", participant.id.toString());
        commit("setParticipant", participant);
      }
    },
    loadParticipant({ commit }) {
      const rawParticipantId = localStorage.getItem("currentParticipant");
      if (rawParticipantId != null) {
        const participantId = Number.parseInt(rawParticipantId, 10);
        commit("setLoading");

        Axios.get<Participant>(`Participants/${participantId}`)
          .then(reponse => {
            commit("setSuccess");
            commit("setParticipant", reponse.data);
          })
          .catch(() => router.push({ path: "register" }));
      } else {
        router.push({ path: "register" });
      }
    },
    handleAnswer({ commit, state }, score) {
      if (state.participant) {
        commit("handleAnswer", score);
        Axios.put(`Participants/${state.participant.id}`, state.participant);
      }
    },
    clear({ commit }) {
      commit("clear");
      localStorage.removeItem("currentParticipant");
    }
  },
  getters: {
    [GET_IS_PARTICIPANT_SET]: state => {
      return state.participant != null;
    },
    [GET_PARTICIPANT]: state => {
      return state.participant;
    }
  }
};
