import Participant from '../models/participant.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import CreateParticipant from '../models/create-participant.model';

@Injectable()
export class ParticipantService {

    constructor(private http: HttpClient) { }

    public getById(participantId: number): Observable<Participant> {
        return this.http.get<Participant>(`Participants/${participantId}`);
    }

    public update(participant: Participant): Observable<void> {
        return this.http.put<void>(`Participants/${participant.id}`, participant);
    }

    public add(participant: CreateParticipant): Observable<Participant> {
        return this.http.post<Participant>('Participants', participant);
    }

    public isNameAvailable(name: string): Observable<{ isNameAvailable: boolean }> {
        return this.http.post<{ isNameAvailable: boolean }>('Participants/IsNameAvailable', { Name: name });
    }
}
