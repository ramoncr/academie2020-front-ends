import {
    DELETE_QUESTION_ERROR,
    DELETE_QUESTION_PENDING,
    DELETE_QUESTION_SUCCESS,
    POST_QUESTION_ERROR,
    POST_QUESTION_PENDING,
    POST_QUESTION_SUCCESS,
    PUT_QUESTION_ERROR,
    PUT_QUESTION_PENDING,
    PUT_QUESTION_SUCCESS
} from './../actions/question.action';
import { GET_QUESTIONS_ERROR, GET_QUESTIONS_PENDING, GET_QUESTIONS_SUCCESS } from '../actions/question.action';
import { Question } from '../../models/question.model';

export interface IQuestionsState {
    pending: boolean;
    data: Array<Question>;
    error: any;
}

export const initialState: IQuestionsState = {
    pending: false,
    data: [],
    error: null
};

export function questionsReducer(state: IQuestionsState = initialState, action: any): IQuestionsState {
    switch (action.type) {
        case GET_QUESTIONS_PENDING:
        case POST_QUESTION_PENDING:
        case PUT_QUESTION_PENDING:
        case DELETE_QUESTION_PENDING:
            return {
                ...state,
                pending: true
            };
        case GET_QUESTIONS_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.questions
            };
        case POST_QUESTION_SUCCESS:
            return {
                ...state,
                pending: false,
                data: [...state.data, action.question]
            };
        case PUT_QUESTION_SUCCESS:
            const questionIndexPut = state.data.findIndex(q => q.id === action.question.id);
            state.data[questionIndexPut] = action.question;
            return {
                ...state,
                pending: false,
                data: [...state.data]
            };
        case DELETE_QUESTION_SUCCESS:
            const questionIndexDelete = state.data.findIndex(q => q.id === action.question.id);
            state.data.splice(questionIndexDelete, 1);
            return {
                ...state,
                data: [...state.data]
            };
        case GET_QUESTIONS_ERROR:
        case POST_QUESTION_ERROR:
        case PUT_QUESTION_ERROR:
        case DELETE_QUESTION_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            };
        default:
            return state;
    }
}
