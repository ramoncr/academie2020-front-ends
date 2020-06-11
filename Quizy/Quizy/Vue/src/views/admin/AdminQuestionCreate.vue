<template>
  <div class="container">
    <h1>Create a new question</h1>
    <QuestionForm v-model="question" />
    <button @click="cancel">Cancel</button>
    <button
      @click="create"
      class="button-primary u-pull-right"
      :disabled="question.content === '' || question.content == null"
    >
      Create
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import QuestionForm from "@/components/QuestionForm.vue";
import { Question } from "../../models/Questions";
import router from "@/router";

@Component({
  components: {
    QuestionForm
  }
})
export default class AdminQuestionCreate extends Vue {
  public question: Question = new Question();

  created() {
    this.$store.dispatch("questions/load");
  }

  cancel() {
    router.push({ name: "admin-questions" });
  }

  create() {
    this.$store.dispatch("questions/add", this.question).then(() => {
      router.push({ name: "admin-questions" });
    });
  }
}
</script>
