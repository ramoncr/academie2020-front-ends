<template>
  <div class="container">
    <div class="row" id="score-row" v-if="this.$store.state.app.participant">
      <div class="six columns">
        Your score: {{ this.$store.state.app.participant.score }} points
      </div>
    </div>
    <div
      class="row"
      v-if="currentQuestion && this.$store.state.app.participant"
    >
      <div class="twelve columns">
        <h2>
          {{ currentQuestion.content }}
          <small>
            {{ this.$store.state.app.participant.questionsAnswered + 1 }}/
            {{ this.$store.state.questions.questions.length }}
          </small>
        </h2>
      </div>
    </div>
    <div class="row" v-if="currentQuestion && currentQuestion.image">
      <div class="twelve columns">
        <img v-bind:src="currentQuestion.image" height="420" alt="qi" />
      </div>
    </div>
    <div class="row" v-if="currentQuestion && currentQuestion.video">
      <div class="twelve columns">
        <iframe
          v-bind:src="currentQuestion.video"
          width="745"
          height="420"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="Question Video"
        ></iframe>
      </div>
    </div>
    <div class="row" v-if="currentQuestion">
      <div class="twelve columns">
        <p>{{ currentQuestion.description }}</p>
      </div>
    </div>
    <div class="row" v-if="currentQuestion">
      <div class="twelve columns">
        <label v-for="option in currentQuestion.answers" v-bind:key="option.id">
          <input type="radio" v-bind:value="option.id" v-model="answer" />
          <span class="label-body">{{ option.text }}</span>
        </label>
      </div>
    </div>
    <div class="row">
      <div class="twelve columns">
        <button :disabled="answer === null" @click="submit">
          Submit Answer
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Question } from "@/models/Questions";
import { mapGetters } from "vuex";
import Participant from "../models/Participant";

@Component({
  name: "Questions",
  computed: {
    ...mapGetters("app", {
      participant: "participant"
    }),
    ...mapGetters("questions", {
      currentQuestion: "currentQuestion"
    })
  }
})
export default class Questions extends Vue {
  public currentQuestion!: Question;
  public answer: string | null = null;
  private currentQuestionResolved = false;

  // Mapped via computed getters above
  public participant!: Participant;

  created() {
    this.handleLoad();
  }

  async handleLoad() {
    if (!this.$store.getters["app/isParticipantSet"]) {
      await this.$store.dispatch("app/loadParticipant");
    }
    await this.$store.dispatch("questions/load");
  }

  submit() {
    if (this.currentQuestion) {
      const matchedResult = this.currentQuestion.answers.find(
        a => a.id.toString() == this.answer
      );

      if (matchedResult) {
        this.$store.dispatch("app/handleAnswer", matchedResult.score);
        this.answer = null;

        if (
          this.$store.state.app.participant.questionsAnswered >=
          this.$store.state.questions.questions.length
        ) {
          alert(
            `That was the last question; Your score was: ${this.$store.state.app.participant.score}; You will be logged out.`
          );
          this.$store.dispatch("app/clear");
          this.$router.push({ path: "/register" });
        }
      }
    }
  }
}
</script>

<style lang="scss">
h2 > small {
  font-size: 14px;
  color: gray;
}

#score-row {
  border-bottom: 1px solid lightgray;
  padding: 15px 0;
  margin-bottom: 15px;
}
</style>
