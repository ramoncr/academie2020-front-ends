import Participant from 'src/app/shared/models/participant.model';
import { createAction, props } from '@ngrx/store';
import CreateParticipant from '../../models/create-participant.model';

export const loadParticipant = createAction('[Participant] Load', props<{ id: number }>());
export const loadParticipantSuccess = createAction('[Participant] Load success', props<{ participant: Participant }>());
export const loadParticipantFailed = createAction('[Participant] Load failed');
export const clearParticipant = createAction('[Participant] clear');
export const updateParticipant = createAction('[Participant] Update', props<{ participant: Participant }>());
export const updateParticipantSuccess = createAction('[Participant] Update success', props<{ participant: Participant }>());
export const createParticipant = createAction('[Participant] create', props<{ participant: CreateParticipant }>());
export const createParticipantSuccess = createAction('[Participant] create success', props<{ participant: Participant }>());
