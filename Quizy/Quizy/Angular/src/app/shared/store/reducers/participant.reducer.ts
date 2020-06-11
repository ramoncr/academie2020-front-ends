import Participant from 'src/app/shared/models/participant.model';
import { Action, createReducer, on } from '@ngrx/store';
import {
    clearParticipant,
    createParticipantSuccess,
    loadParticipant,
    loadParticipantFailed,
    loadParticipantSuccess,
    updateParticipantSuccess
} from '../actions/participant.action';

export interface ParticipantState {
    participant: Participant;
    success: boolean;
    failed: boolean;
    loading: boolean;
}

export const initialState = {
    participant: null,
    success: false,
    failed: false,
    loading: false
};

const localParticipantReducer = createReducer<ParticipantState>(initialState,
    on(loadParticipantSuccess, (state, { participant }) => ({ ...state, loading: false, success: true, failed: false, participant })),
    on(loadParticipant, (state) => ({ ...state, loading: true, success: false, failed: false, participant: null })),
    on(loadParticipantFailed, (state) => ({ ...state, loading: false, success: false, failed: true })),
    on(updateParticipantSuccess, (state, { participant }) => ({ ...state, participant })),
    on(clearParticipant, (state) => ({ ...state, loading: false, success: true, failed: false, participant: null })),
    on(createParticipantSuccess, (state, { participant }) => ({ ...state, loading: false, success: true, failed: false, participant }))
);

export function participantReducer(state: ParticipantState, action: Action) {
    return localParticipantReducer(state, action);
}
