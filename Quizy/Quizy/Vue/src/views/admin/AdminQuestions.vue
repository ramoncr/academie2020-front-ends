<template>
  <div class="container">
    <h1>Question Management</h1>
    <button @click="createQuestion">Create new question</button>
    <QuestionsTable
      :questions="questions"
      v-on:deleteQuestion="deleteQuestion"
      v-on:editQuestion="editQuestion"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import QuestionsTable from "@/components/QuestionsTable.vue";
import { mapGetters } from "vuex";
import { Question } from "@/models/Questions";
import router from "@/router";

@Component({
  components: {
    QuestionsTable
  },
  computed: {
    ...mapGetters("questions", {
      questions: "questions"
    })
  }
})
export default class AdminQuestions extends Vue {
  created() {
    this.$store.dispatch("questions/load");
  }

  deleteQuestion(question: Question) {
    this.$store.dispatch("questions/delete", question.id);
  }

  editQuestion(question: Question) {
    router.push({
      name: "admin-questions-edit",
      params: { questionId: question.id.toString() }
    });
  }

  createQuestion() {
    router.push({ name: "admin-questions-create" });
  }
}
</script>
