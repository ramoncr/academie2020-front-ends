import fromRoot, { AppState } from 'src/app/shared/store/selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { first, skip } from 'rxjs/operators';
import { loadQuestions, updateQuestion } from 'src/app/shared/store/actions/questions.action';
import { Question } from 'src/app/shared/models/question.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.scss']
})
export class QuestionEditComponent implements OnInit {
  public question: Question = new Question();

  constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let skipVal = 0;
    this.store.select(fromRoot.questions.selectQuestionsData).pipe(first()).subscribe(q => {
      if (!q || q.length <= 0) {
        this.store.dispatch(loadQuestions());
        skipVal = 1;
      }
    });

    this.route.params.subscribe(params => {
      if (params.id && Number(params.id)) {
        const questionId = Number(params.id);
        this.store.select(fromRoot.questions.selectQuestionsData).pipe(skip(skipVal), first()).subscribe(questions => {
          if (questions && questions.length > 0 && questions.some(q => q.id === questionId)) {
            const foundQuestion = questions.find(q => q.id === questionId);
            if (foundQuestion) {
              this.question = Object.assign({}, foundQuestion);
              this.question.answers = [...foundQuestion.answers.map(a => Object.assign({}, a))];
            }

          } else {
            this.routeToList();
          }
        });
      } else {
        this.routeToList();
      }
    });
  }

  public cancel(): void {
    this.routeToList();
  }

  public save(): void {
    this.store.dispatch(updateQuestion({ question: this.question }));
    this.router.navigate(['..'], {
      relativeTo: this.route
    });
  }

  private routeToList() {
    this.router.navigate(['..'], {
      relativeTo: this.route
    });
  }
}
