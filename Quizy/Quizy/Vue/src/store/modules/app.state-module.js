import axios from "axios";
import router from "@/router";
export const applicationStateModule = {
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
    }
  },
  actions: {
    setParticipant({ commit }, participant) {
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
        axios
          .get(`https://localhost:44313/api/Participants/${participantId}`)
          .then(reponse => {
            commit("setSuccess");
            commit("setParticipant", reponse.data);
          })
          .catch(error => router.push({ path: "register" }));
      } else {
        router.push({ path: "register" });
      }
    }
  },
  getters: {
    isParticipantSet: state => {
      return state.participant != null;
    },
    participant: state => {
      return state.participant;
    }
  }
};
//# sourceMappingURL=app.state-module.js.map
