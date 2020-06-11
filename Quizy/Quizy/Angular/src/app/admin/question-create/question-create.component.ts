import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Question } from 'src/app/shared/models/question.model';
import { createQuestion } from 'src/app/shared/store/actions/questions.action';
import { AppState } from 'src/app/shared/store/selectors';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.scss']
})
export class QuestionCreateComponent {
  public question: Question = new Question();

  constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute) { }

  cancel(): void {
    this.router.navigate(['..'], {
      relativeTo: this.route
    });
  }

  save(): void {
    this.store.dispatch(createQuestion({ question: this.question }));
    this.router.navigate(['..'], {
      relativeTo: this.route
    });
  }
}
