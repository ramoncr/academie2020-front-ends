export default class Participant {
  public id: number;
  public name?: string;
  public score = 0;
  public questionsAnswered = 0;

  constructor(participant?: Participant) {
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
