import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question.model';

@Injectable()
export class QuestionsService {

    constructor(private http: HttpClient) { }

    public getAll(): Observable<Question[]> {
        return this.http.get<Question[]>('Questions');
    }

    public update(question: Question): Observable<void> {
        return this.http.put<void>(`Questions/${question.id}`, question);
    }

    public add(question: Question): Observable<Question> {
        return this.http.post<Question>('Questions', question);
    }

    public delete(questionId: number): Observable<void> {
        return this.http.delete<void>(`Questions/${questionId}`);
    }
}
