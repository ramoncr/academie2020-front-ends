import CreateParticipant from '../shared/models/create-participant.model';
import fromRoot, { AppState } from '../shared/store/selectors';
import { AsyncValidatorFn, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { createParticipant } from '../shared/store/actions/participant.action';
import {
  filter,
  first,
  map,
  switchMap
} from 'rxjs/operators';
import { ParticipantService } from '../shared/services/participant.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { timer } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public nameControl: FormControl;

  public isNameValid: boolean;

  private isNameValidValidator = (participantService: ParticipantService, time: number = 500): AsyncValidatorFn => {
    return (input: FormControl) => {
      return timer(time).pipe(
        switchMap(() => participantService.isNameAvailable(input.value)),
        map(res => {
          return res.isNameAvailable ? null : { userNameIsAvailable: false };
        })
      );
    };
  }

  constructor(private store: Store<AppState>, private router: Router, participantService: ParticipantService) {
    this.nameControl = new FormControl('', Validators.required, this.isNameValidValidator(participantService));
  }

  submit() {
    this.store.dispatch(createParticipant({ participant: new CreateParticipant(this.nameControl.value) }));
    this.store.select(fromRoot.participants.selectParticipantData)
      .pipe(
        filter(p => !!p),
        first()
      ).subscribe(p => {
        localStorage.setItem('currentParticipant', p.id.toString());
        window.location.href = 'questions';
      });
  }
}

