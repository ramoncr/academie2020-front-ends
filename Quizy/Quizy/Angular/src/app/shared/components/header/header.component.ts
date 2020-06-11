import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import Participant from '../../models/participant.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() public participant: Participant;
  @Output() public logoutClick: EventEmitter<void> = new EventEmitter();

}
