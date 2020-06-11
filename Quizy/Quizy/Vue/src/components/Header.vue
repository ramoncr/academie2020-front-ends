<template>
  <div id="nav">
    <div class="container">
      <router-link id="header-title" to="/">Quizy</router-link>
      <router-link to="/questions">Questions</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/admin">Admin</router-link>
      <div
        id="currentUser"
        class="u-pull-right"
        v-if="this.participant"
        @click="$emit('clearParticipant')"
      >
        Logout
        {{ this.participant.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { GET_PARTICIPANT } from "@/store/modules/app.state-module";

@Component({
  computed: {
    ...mapGetters("app", { participant: GET_PARTICIPANT })
  }
})
export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nav {
  background-color: lightcyan;
  box-shadow: 0px 4px 49px -15px rgba(0, 0, 0, 0.65);
  height: 54px;
  margin-bottom: 25px;

  & #header-title {
    padding-left: 0;

    &:hover {
      background-color: lightcyan;
    }
  }

  & a {
    padding: 15px 25px;
    display: inline-block;
    color: darkslategrey;
    text-decoration: none;

    &:hover {
      background-color: cyan;
    }
  }
}

#currentUser {
  padding: 15px 0;
  display: inline-block;
}
</style>
