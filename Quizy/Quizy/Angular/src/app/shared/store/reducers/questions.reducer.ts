import { Action, createReducer, on } from '@ngrx/store';
import {
    clearQuestions,
    createQuestionSuccess,
    deleteQuestionSuccess,
    loadQuestions,
    loadQuestionsFailed,
    loadQuestionsSuccess,
    updateQuestionSuccess
} from '../actions/questions.action';
import { Question } from 'src/app/shared/models/question.model';

export interface QuestionsState {
    questions: Question[];
    success: boolean;
    failed: boolean;
    loading: boolean;
}

export const initialState = {
    questions: null,
    success: false,
    failed: false,
    loading: false
};

const localQuestionsReducer = createReducer<QuestionsState>(initialState,
    on(loadQuestionsSuccess, (state, { questions }) =>
        ({ ...state, loading: false, success: true, failed: false, questions })
    ),
    on(loadQuestions, (state) =>
        ({ ...state, loading: true, success: false, failed: false, questions: null })
    ),
    on(loadQuestionsFailed, (state) =>
        ({ ...state, loading: false, success: false, failed: true })
    ),
    on(createQuestionSuccess, (state, { question }) =>
        ({ ...state, questions: [...state.questions, question] })
    ),
    on(deleteQuestionSuccess, (state, { id }) =>
        ({ ...state, questions: [...state.questions.filter(q => q.id !== id)] })
    ),
    on(updateQuestionSuccess, (state, { question }) =>
        ({ ...state, questions: [...state.questions.map(q => q.id === question.id ? question : q)] })
    ),
    on(clearQuestions, (state) => initialState),
);

export function questionsReducer(state: QuestionsState, action: Action) {
    return localQuestionsReducer(state, action);
}
