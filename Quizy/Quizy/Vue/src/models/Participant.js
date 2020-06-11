export default class Participant {
  constructor(participant) {
    this.score = 0;
    this.questionsAnswered = 0;
    if (participant) {
      this.id = participant.id;
      this.name = participant.name;
      this.score = participant.score;
      this.questionsAnswered = participant.questionsAnswered;
    } else {
      this.id = -1;
    }
  }
}
//# sourceMappingURL=Participant.js.map
