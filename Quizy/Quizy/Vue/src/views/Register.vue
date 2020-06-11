<template>
  <div class="container">
    <div class="row">
      <div class="twelve columns">
        <h1>Register</h1>
        <p>
          Welcome to this cool quiz tool! Please put in you information below to
          get started with quizing!
        </p>
      </div>
    </div>
    <div class="row">
      <div class="twelve columns">
        <TextInput
          v-model="userName"
          id="nameInput"
          placeholder="John Doe"
          label="Your name"
          @input="verifyIfNameIsUnique"
        />
        <div v-if="touched && !isNameValid" class="color-red">
          Name is already in use
        </div>
      </div>
    </div>
    <div class="row">
      <div class="twelve columns">
        <button :disabled="!this.isNameValid" @click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Participant from "@/models/Participant";
import TextInput from "@/components/molecules/TextInput.vue";
import router from "../router";
import Axios from "axios";

@Component({
  components: {
    TextInput
  }
})
export default class Register extends Vue {
  private userName = "";
  private touched = false;
  private isNameValid = false;

  get message() {
    return this.$store.state;
  }

  get isTeamCodeSet() {
    return false;
  }

  created() {
    if (this.$store.getters["app/isParticipantSet"]) {
      router.push({ path: "questions" });
    }
  }

  verifyIfNameIsUnique() {
    if (this.userName === "" || this.userName.length <= 3) {
      this.isNameValid = false;
      this.touched = false;
      return;
    }

    Axios.post("Participants/IsNameAvailable", {
      Name: this.userName
    })
      .then(response => {
        this.touched = true;
        this.isNameValid = response.data.isNameAvailable as boolean;
      })
      .catch(() => {
        this.touched = true;
        this.isNameValid = false;
      });
  }

  submit() {
    Axios.post("Participants", {
      Name: this.userName
    })
      .then(response => {
        const participant = response.data as Participant;
        this.$store.dispatch("app/setParticipant", participant);
        router.push({ path: "questions" });
      })
      .catch(error => {
        console.error(error);
      });
  }
}
</script>

<style lang="scss">
.color-red {
  color: red;
}
</style>
