import {
    CLEAR_PARTICIPANT,
    POST_PARTICIPANT_ERROR,
    POST_PARTICIPANT_PENDING,
    POST_PARTICIPANT_SUCCESS,
    PUT_PARTICIPANT_ERROR,
    PUT_PARTICIPANT_PENDING,
    PUT_PARTICIPANT_SUCCESS,
    HANDLE_ANSWER
} from './../actions/participant.action';
import { GET_PARTICIPANT_ERROR, GET_PARTICIPANT_PENDING, GET_PARTICIPANT_SUCCESS } from '../actions/participant.action';
import { Participant } from '../../models/participant.model';

export interface IParticipantsState {
    pending: boolean;
    data: Participant | null;
    error: any;
}

export const initialState: IParticipantsState = {
    pending: false,
    data: null,
    error: null
};

export function participantReducer(state: IParticipantsState = initialState, action: any): IParticipantsState {
    switch (action.type) {
        case GET_PARTICIPANT_PENDING:
        case POST_PARTICIPANT_PENDING:
        case PUT_PARTICIPANT_PENDING:
            return {
                ...state,
                pending: true
            };
        case GET_PARTICIPANT_SUCCESS:
        case POST_PARTICIPANT_SUCCESS:
        case PUT_PARTICIPANT_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.participant
            };
        case GET_PARTICIPANT_ERROR:
        case POST_PARTICIPANT_ERROR:
        case PUT_PARTICIPANT_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            };
        case CLEAR_PARTICIPANT:
            return { ...initialState };
        case HANDLE_ANSWER:
            if (state.data) {
                state.data.questionsAnswered++;
                state.data.score += action.score;
            }
            
            return { ...state };
        default:
            return state;
    }
}
