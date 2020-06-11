import { createAction, props } from '@ngrx/store';
import { Question } from 'src/app/shared/models/question.model';

export const loadQuestions = createAction('[Questions] Load');
export const loadQuestionsSuccess = createAction('[Questions] Load success', props<{ questions: Question[] }>());
export const loadQuestionsFailed = createAction('[Questions] Load failed');
export const clearQuestions = createAction('[Questions] clear');
export const deleteQuestion = createAction('[Question] Delete', props<{ id: number }>());
export const deleteQuestionSuccess = createAction('[Question] Delete success', props<{ id: number }>());
export const createQuestion = createAction('[Question] Create', props<{ question: Question }>());
export const createQuestionSuccess = createAction('[Question] Create success', props<{ question: Question }>());
export const updateQuestion = createAction('[Question] Update', props<{ question: Question }>());
export const updateQuestionSuccess = createAction('[Question] Update success', props<{ question: Question }>());

