<template>
  <div id="app">
    <Header v-on:clearParticipant="clearParticipant" />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import router from "./router";
import Header from "./components/Header.vue";

export default Vue.component("App", {
  methods: {
    clearParticipant(): void {
      this.$store.dispatch("app/clear");
      router.push({ path: "/register" });
    }
  },
  components: {
    Header
  },
  watch: {
    $route(to) {
      document.title =
        to.meta && to.meta.name ? "Quizzy - " + to.meta.name : "Quizzy";
    }
  }
});
</script>

<style lang="scss">
@import "./assets/css/skeleton.css";
@import "./assets/css/skeleton.normalize.css";

.row {
  margin: 5px 0;
}

button:disabled {
  opacity: 0.5;
}
</style>
