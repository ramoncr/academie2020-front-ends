import fromRoot, { AppState } from 'src/app/shared/store/selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { deleteQuestion, loadQuestions } from 'src/app/shared/store/actions/questions.action';
import { Question } from 'src/app/shared/models/question.model';
import { Store } from '@ngrx/store';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {
  public questions = this.store.select(fromRoot.questions.selectQuestionsData);


  constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.store.select(fromRoot.questions.selectQuestionsData).pipe(first()).subscribe(q => {
      if (!q) {
        this.store.dispatch(loadQuestions());
      }
    });
  }

  createQuestion(): void {
    this.router.navigate(['create'], {
      relativeTo: this.route
    });
  }

  deleteQuestion(question: Question) {
    if (confirm('Are you sure you want to delete the question?')) {
      this.store.dispatch(deleteQuestion({ id: question.id }));
    }

  }

  editQuestion(question: Question) {
    this.router.navigate([question.id], {
      relativeTo: this.route
    });
  }
}
