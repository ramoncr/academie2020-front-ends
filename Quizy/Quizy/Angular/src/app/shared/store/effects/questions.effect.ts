import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
    createQuestion,
    createQuestionSuccess,
    deleteQuestion,
    deleteQuestionSuccess,
    loadQuestions,
    loadQuestionsFailed,
    loadQuestionsSuccess,
    updateQuestion,
    updateQuestionSuccess
} from '../actions/questions.action';
import { EMPTY, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';

@Injectable()
export class QuestionEffects {
    loadQuestions$ = createEffect(() => this.actions$.pipe(
        ofType(loadQuestions),
        mergeMap(() => this.questionsService.getAll()
            .pipe(
                map(questions => loadQuestionsSuccess({ questions })),
                catchError(() => of(loadQuestionsFailed()))
            )
        )
    ));

    createQuestion$ = createEffect(() => this.actions$.pipe(
        ofType(createQuestion),
        mergeMap(action => this.questionsService.add(action.question).pipe(
            map(question => createQuestionSuccess({ question })),
            catchError(() => EMPTY)
        ))
    ));

    updateQuestion$ = createEffect(() => this.actions$.pipe(
        ofType(updateQuestion),
        mergeMap(action => this.questionsService.update(action.question).pipe(
            map(() => updateQuestionSuccess({ question: action.question })),
            catchError(() => EMPTY)
        ))
    ));

    deleteQuestion$ = createEffect(() => this.actions$.pipe(
        ofType(deleteQuestion),
        mergeMap(action => this.questionsService.delete(action.id).pipe(
            map(() => deleteQuestionSuccess({ id: action.id })),
            catchError(() => EMPTY)
        ))
    ));

    constructor(private actions$: Actions, private questionsService: QuestionsService) { }
}
