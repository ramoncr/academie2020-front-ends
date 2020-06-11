import axios from 'axios';
import { Question } from '../../models/question.model';
import { Action } from 'redux';

// Get
export const GET_QUESTIONS = 'GEt_QUESTIONS';
export const GET_QUESTIONS_PENDING = 'GEt_QUESTIONS_PENDING';
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
export const GET_QUESTIONS_ERROR = 'GEt_QUESTIONS_ERROR';

export const getQuestions = () =>
    (dispatch: (action: Action) => void) => {
        dispatch(getQuestionsPending());
        axios.get<Array<Question>>(`questions`)
            .then(res => {
                dispatch(getQuestionsSuccess(res.data));
            })
            .catch(error => {
                dispatch(getQuestionsError(error));
            });
    };

export const getQuestionsPending = () => ({ type: GET_QUESTIONS_PENDING });
export const getQuestionsSuccess = (questions: Array<Question>) => ({ type: GET_QUESTIONS_SUCCESS, questions });
export const getQuestionsError = (error: any) => ({ type: GET_QUESTIONS_ERROR, error });

// Post
export const POST_QUESTION = 'POST_QUESTIONS';
export const POST_QUESTION_PENDING = 'POST_QUESTIONS_PENDING';
export const POST_QUESTION_SUCCESS = 'POST_QUESTIONS_SUCCESS';
export const POST_QUESTION_ERROR = 'POST_QUESTIONS_ERROR';

export const postQuestion = (question: Question) =>
    (dispatch: (action: Action) => void) => {
        dispatch(postQuestionPending());
        axios.post<Question>(`questions`, question)
            .then(res => {
                dispatch(postQuestionSuccess(res.data));
            })
            .catch(error => {
                dispatch(postQuestionError(error));
            });
    };

export const postQuestionPending = () => ({ type: POST_QUESTION_PENDING });
export const postQuestionSuccess = (question: Question) => ({ type: POST_QUESTION_SUCCESS, question });
export const postQuestionError = (error: any) => ({ type: POST_QUESTION_ERROR, error });

// Put
export const PUT_QUESTION = 'PUT_QUESTIONS';
export const PUT_QUESTION_PENDING = 'PUT_QUESTIONS_PENDING';
export const PUT_QUESTION_SUCCESS = 'PUT_QUESTIONS_SUCCESS';
export const PUT_QUESTION_ERROR = 'PUT_QUESTIONS_ERROR';

export const putQuestion = (question: Question) =>
    (dispatch: (action: Action) => void) => {
        dispatch(putQuestionPending());
        axios.put<Question>(`questions/${question.id}`, question)
            .then(res => {
                dispatch(putQuestionSuccess(res.data));
            })
            .catch(error => {
                dispatch(putQuestionError(error));
            });
    };

export const putQuestionPending = () => ({ type: PUT_QUESTION_PENDING });
export const putQuestionSuccess = (question: Question) => ({ type: PUT_QUESTION_SUCCESS, question });
export const putQuestionError = (error: any) => ({ type: PUT_QUESTION_ERROR, error });

// Delete
export const DELETE_QUESTION = 'DELETE_QUESTIONS';
export const DELETE_QUESTION_PENDING = 'DELETE_QUESTIONS_PENDING';
export const DELETE_QUESTION_SUCCESS = 'DELETE_QUESTIONS_SUCCESS';
export const DELETE_QUESTION_ERROR = 'DELETE_QUESTIONS_ERROR';

export const deleteQuestion = (id: number) =>
    (dispatch: (action: Action) => void) => {
        dispatch(deleteQuestionPending());
        axios.delete<Question>(`questions/${id}`)
            .then(res => {
                dispatch(deleteQuestionSuccess(res.data));
            })
            .catch(error => {
                dispatch(deleteQuestionError(error));
            });
    };

export const deleteQuestionPending = () => ({ type: DELETE_QUESTION_PENDING });
export const deleteQuestionSuccess = (question: Question) => ({ type: DELETE_QUESTION_SUCCESS, question });
export const deleteQuestionError = (error: any) => ({ type: DELETE_QUESTION_ERROR, error });