import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-questions-table',
  templateUrl: './questions-table.component.html',
  styleUrls: ['./questions-table.component.scss']
})
export class QuestionsTableComponent {
  @Input() public questions: Question[];
  @Output() public deleteQuestion: EventEmitter<Question> = new EventEmitter();
  @Output() public editQuestion: EventEmitter<Question> = new EventEmitter();
}
