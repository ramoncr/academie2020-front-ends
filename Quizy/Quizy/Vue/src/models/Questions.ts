export class Answer {
  public id!: number;
  public text!: string;
  public score!: number;
}

export class Question {
  public id!: number;
  public content!: string;
  public description?: string;
  public image?: string;
  public video?: string;
  public answers!: Answer[];

  constructor() {
    this.answers = [new Answer(), new Answer(), new Answer()];
  }
}

export default {
  Question,
  Answer
};
