export class Answer {
  public id!: number;
  public text = '';
  public score = 0;
}

export class Question {
  public id!: number;
  public content = '';
  public description = '';
  public image = '';
  public video = '';
  public answers!: Answer[];

  constructor() {
    this.answers = [new Answer(), new Answer(), new Answer()];
  }
}

export default {
  Question,
  Answer
};
