<template>
  <div class="row">
    <div class="twelve columns">
      <table id="questions-table">
        <thead>
          <tr>
            <th id="question-id">#</th>
            <th id="question-content">Content</th>
            <th id="question-description">Description</th>
            <th id="question-actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="question in questions" v-bind:key="question.id">
            <td>{{ question.id }}</td>
            <td>{{ question.content }}</td>
            <td>{{ question.description }}</td>
            <td>
              <button @click="$emit('deleteQuestion', question)">
                <i class="material-icons">delete</i>
              </button>
              <button @click="$emit('editQuestion', question)">
                <i class="material-icons">edit</i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Question } from "@/models/Questions";

@Component
export default class QuestionsTable extends Vue {
  @Prop() public questions!: Question[];
}
</script>

<style lang="scss" scoped>
#questions-table {
  width: 100%;

  td,
  th {
    padding: 10px;
  }
}
</style>
