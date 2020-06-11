import fromRoot, { AppState } from './shared/store/selectors';
import { clearParticipant } from './shared/store/actions/participant.action';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public participant = this.store.select(fromRoot.participants.selectParticipantData);
  constructor(private store: Store<AppState>, private router: Router) { }

  public logout(): void {
    localStorage.removeItem('currentParticipant');
    this.store.dispatch(clearParticipant());
    this.router.navigate(['register']);
  }
}
