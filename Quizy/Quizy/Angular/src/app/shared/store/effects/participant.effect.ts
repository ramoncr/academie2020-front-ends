import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
    createParticipant,
    createParticipantSuccess,
    loadParticipant,
    loadParticipantFailed,
    loadParticipantSuccess,
    updateParticipant,
    updateParticipantSuccess
} from '../actions/participant.action';
import { EMPTY, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ParticipantService } from '../../services/participant.service';

@Injectable()
export class ParticipantEffects {
    loadParticipant$ = createEffect(() => this.actions$.pipe(
        ofType(loadParticipant),
        mergeMap(action => this.participantService.getById(action.id)
            .pipe(
                map(participant => loadParticipantSuccess({ participant })),
                catchError(() => of(loadParticipantFailed()))
            )
        )
    ));

    updateParticipant$ = createEffect(() => this.actions$.pipe(
        ofType(updateParticipant),
        mergeMap(action => this.participantService.update(action.participant)
            .pipe(
                map(() => updateParticipantSuccess({ participant: action.participant })),
                catchError(() => EMPTY)
            )
        )
    ));

    createParticipant$ = createEffect(() => this.actions$.pipe(
        ofType(createParticipant),
        mergeMap(action => this.participantService.add(action.participant)
            .pipe(
                map(participant => createParticipantSuccess({ participant })),
                catchError(() => EMPTY)
            )
        )
    ));

    constructor(private actions$: Actions, private participantService: ParticipantService) { }
}
