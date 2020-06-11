import fromRoot, { AppState } from '../shared/store/selectors';
import { clearParticipant, loadParticipant, updateParticipant } from '../shared/store/actions/participant.action';
import { combineLatest, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { first } from 'rxjs/operators';
import { loadQuestions } from '../shared/store/actions/questions.action';
import { Question } from '../shared/models/question.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnDestroy {
  public questions$ = this.store.select(fromRoot.questions.selectQuestionsData);
  public participant$ = this.store.select(fromRoot.participants.selectParticipantData);
  public currentQuestion$ = this.store.select(fromRoot.compound.selectCurrentQuestion);

  public givenAnswer: number;

  private currentQuestionSubscription: Subscription;

  constructor(private store: Store<AppState>, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnDestroy(): void {
    this.currentQuestionSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.watchQuestionsOrParticipantChange();
    this.resolveParticipant();
    this.store.dispatch(loadQuestions());
  }

  submitAnswer(currentQuestion: Question): void {
    if (currentQuestion) {
      const matchedResult = currentQuestion.answers.find(
        a => a.id === this.givenAnswer
      );

      if (matchedResult) {
        this.givenAnswer = null;
        // Dispatch update for participant
        this.participant$.pipe(first()).subscribe(p => {
          const updatedParticipant = Object.assign({}, p);
          updatedParticipant.score += matchedResult.score;
          updatedParticipant.questionsAnswered++;
          this.store.dispatch(updateParticipant({ participant: updatedParticipant }));
        });

      }
    }
  }

  private resolveParticipant() {
    this.participant$.pipe(first()).subscribe((p) => {
      if (p == null) {
        const rawParcitipantId = localStorage.getItem('currentParticipant');
        if (rawParcitipantId) {
          const participantId = Number.parseInt(rawParcitipantId, 10);
          if (participantId) {
            this.store.dispatch(loadParticipant({ id: participantId }));
            return;
          }
        }
        this.router.navigate(['register']);
      }
    });
  }

  private watchQuestionsOrParticipantChange() {
    this.currentQuestionSubscription = combineLatest([this.participant$, this.questions$]).subscribe(([participant, questions]) => {
      if (participant && questions && questions.length > 0) {
        if (participant.questionsAnswered >= questions.length) {
          alert(
            `That was the last question; Your score was: ${participant.score}; You will be logged out.`
          );
          this.store.dispatch(clearParticipant());
          localStorage.removeItem('currentParticipant');
          this.router.navigate(['register']);
        }
      }
    });
  }
}
