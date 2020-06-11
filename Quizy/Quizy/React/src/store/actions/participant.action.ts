import { Action } from 'redux';
import axios from 'axios';
import { Participant } from '../../models/participant.model';

// Get
export const GET_PARTICIPANT = 'GET_PARTICIPANT';
export const GET_PARTICIPANT_PENDING = 'GET_PARTICIPANT_PENDING';
export const GET_PARTICIPANT_SUCCESS = 'GET_PARTICIPANT_SUCCESS';
export const GET_PARTICIPANT_ERROR = 'GET_PARTICIPANT_ERROR';

export const getParticipant = (id: number) =>
    (dispatch: (action: Action) => void) => {
        dispatch(getParticipantPending());
        axios.get<Participant>(`participants/${id}`)
            .then(res => {
                dispatch(getParticipantSuccess(res.data));
            })
            .catch(error => {
                dispatch(getParticipantError(error));
            });
    }
export const getParticipantPending = () => ({ type: GET_PARTICIPANT_PENDING });
export const getParticipantSuccess = (participant: Participant) => ({ type: GET_PARTICIPANT_SUCCESS, participant });
export const getParticipantError = (error: any) => ({ type: GET_PARTICIPANT_ERROR, error });

// Post
export const POST_PARTICIPANT = 'POST_PARTICIPANT';
export const POST_PARTICIPANT_PENDING = 'POST_PARTICIPANT_PENDING';
export const POST_PARTICIPANT_SUCCESS = 'POST_PARTICIPANT_SUCCESS';
export const POST_PARTICIPANT_ERROR = 'POST_PARTICIPANT_ERROR';

export const postParticipant = (participant: Participant) =>
    (dispatch: (action: Action) => void) => {
        dispatch(postParticipantPending());
        axios.post<Participant>(`participants`, participant)
            .then(res => {
                localStorage.setItem('currentParticipant', res.data.id.toString());
                dispatch(postParticipantSuccess(res.data));
            })
            .catch(error => {
                dispatch(postParticipantError(error));
            });
    }
export const postParticipantPending = () => ({ type: POST_PARTICIPANT_PENDING });
export const postParticipantSuccess = (participant: Participant) => ({ type: POST_PARTICIPANT_SUCCESS, participant });
export const postParticipantError = (error: any) => ({ type: POST_PARTICIPANT_ERROR, error });

// Put
export const PUT_PARTICIPANT = 'POST_PARTICIPANT';
export const PUT_PARTICIPANT_PENDING = 'POST_PARTICIPANT_PENDING';
export const PUT_PARTICIPANT_SUCCESS = 'POST_PARTICIPANT_SUCCESS';
export const PUT_PARTICIPANT_ERROR = 'POST_PARTICIPANT_ERROR';

export const putParticipant = (participant: Participant) =>
    (dispatch: (action: Action) => void) => {
        dispatch(putParticipantPending());
        axios.put<Participant>(`participants/${participant.id}`, participant)
            .then(res => {
                dispatch(putParticipantSuccess(res.data));
            })
            .catch(error => {
                dispatch(putParticipantError(error));
            });
    }
export const putParticipantPending = () => ({ type: PUT_PARTICIPANT_PENDING });
export const putParticipantSuccess = (participant: Participant) => ({ type: PUT_PARTICIPANT_SUCCESS, participant });
export const putParticipantError = (error: any) => ({ type: PUT_PARTICIPANT_ERROR, error });

// Handle answer
export const HANDLE_ANSWER = 'HANDLE_ANSWER';

export const handleAnswer = (score: number) => ({ type: HANDLE_ANSWER, score });

// Clear
export const CLEAR_PARTICIPANT = 'CLEAR_PARTICIPANT';

export const clearParticipant = () => ({ type: CLEAR_PARTICIPANT });
