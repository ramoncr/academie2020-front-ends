<template>
  <div class="row">
    <div class="twelve columns" v-if="value">
      <TextInput
        v-model="value.content"
        id="question-content"
        placeholder="Example question?"
        label="Content"
        @input="updateQuestion"
      />
      <TextInput
        v-model="value.description"
        id="question-description"
        placeholder="A description for the question"
        label="Description"
        @input="updateQuestion"
      />
      <TextInput
        v-model="value.image"
        id="question-image"
        placeholder="https://image.src/cute-animal.png"
        label="Image URL"
        @input="updateQuestion"
      />
      <TextInput
        v-model="value.video"
        id="question-video"
        placeholder="https://www.youtube.com/embed/FeJKJ5MoCHY"
        label="Video Embed URL"
        @input="updateQuestion"
      />

      <hr />
      <h3>Answers</h3>

      <div class="row">
        <div class="eight columns">
          <TextInput
            v-model="value.answers[0].text"
            id="question-answer-0-text"
            placeholder="The answer"
            label="Answer 1"
            @input="updateQuestion"
          />
        </div>
        <div class="four columns">
          <NumberInput
            v-model="value.answers[0].score"
            id="question-answer-0-score"
            placeholder="300"
            label="Score"
            @input="updateQuestion"
          />
        </div>
      </div>

      <div class="row">
        <div class="eight columns">
          <TextInput
            v-model="value.answers[1].text"
            id="question-answer-1-text"
            placeholder="The answer"
            label="Answer 2"
            @input="updateQuestion"
          />
        </div>
        <div class="four columns">
          <NumberInput
            v-model="value.answers[1].score"
            id="question-answer-1-score"
            placeholder="300"
            label="Score"
            @input="updateQuestion"
          />
        </div>
      </div>

      <div class="row">
        <div class="eight columns">
          <TextInput
            v-model="value.answers[2].text"
            id="question-answer-2-text"
            placeholder="The answer"
            label="Answer 3"
            @input="updateQuestion"
          />
        </div>
        <div class="four columns">
          <NumberInput
            v-model="value.answers[2].score"
            id="question-answer-2-score"
            placeholder="300"
            label="Score"
            @input="updateQuestion"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Question } from "@/models/Questions";
import TextInput from "./molecules/TextInput.vue";
import NumberInput from "./molecules/NumberInput.vue";

@Component({
  components: {
    TextInput,
    NumberInput
  }
})
export default class QuestionForm extends Vue {
  @Prop({
    required: true
  })
  public value!: Question;

  updateQuestion() {
    this.$emit("input", this.value);
  }
}
</script>
