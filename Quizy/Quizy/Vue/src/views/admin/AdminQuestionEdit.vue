<template>
  <div class="container">
    <h1>Edit the question</h1>
    <QuestionForm v-model="question" />
    <button @click="cancel">Cancel</button>
    <button
      @click="save"
      class="button-primary u-pull-right"
      :disabled="question.content === '' || question.content == null"
    >
      Save
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Question } from "@/models/Questions";
import QuestionForm from "@/components/QuestionForm.vue";
import router from "@/router";
import { mapGetters } from "vuex";

@Component({
  components: {
    QuestionForm
  },
  computed: {
    ...mapGetters("questions", {
      questions: "questions"
    })
  }
})
export default class AdminQuestionEdit extends Vue {
  public question: Question = new Question();

  public questions!: Question[];

  @Watch("questions")
  questionsChanged() {
    const questionId = Number(this.$route.params.questionId);
    const currentQuestion = this.questions.find(q => q.id === questionId);
    if (currentQuestion != null) {
      this.question = currentQuestion;
    } else {
      router.push({ name: "admin-questions" });
    }
  }

  created() {
    this.$store.dispatch("questions/load");
  }

  cancel() {
    router.push({ name: "admin-questions" });
  }

  save() {
    this.$store.dispatch("questions/update", this.question).then(() => {
      router.push({ name: "admin-questions" });
    });
  }
}
</script>
