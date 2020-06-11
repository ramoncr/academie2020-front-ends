import { Answer } from './anwer.model';

export class Question {
    public id: number = 0;
    public content: string = '';
    public description: string = '';
    public image: string = '';
    public video: string = '';
    public answers: Array<Answer> = [];

    constructor();
    constructor(answers: Array<Answer>);
    constructor(answers?: Array<Answer>) {
        if (answers) { this.answers = answers; }
    }
}
