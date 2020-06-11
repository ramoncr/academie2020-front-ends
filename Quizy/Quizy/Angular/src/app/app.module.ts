import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BaseUrlInterceptor } from './shared/interceptors/base-url.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NumberInputComponent } from './shared/components/molecules/number-input/number-input.component';
import { ParticipantEffects } from './shared/store/effects/participant.effect';
import { participantReducer } from './shared/store/reducers/participant.reducer';
import { ParticipantService } from './shared/services/participant.service';
import { QuestionCreateComponent } from './admin/question-create/question-create.component';
import { QuestionEditComponent } from './admin/question-edit/question-edit.component';
import { QuestionEffects } from './shared/store/effects/questions.effect';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsFormComponent } from './shared/components/questions-form/questions-form.component';
import { QuestionsListComponent } from './admin/questions-list/questions-list.component';
import { questionsReducer } from './shared/store/reducers/questions.reducer';
import { QuestionsService } from './shared/services/questions.service';
import { QuestionsTableComponent } from './shared/components/questions-table/questions-table.component';
import { RegisterComponent } from './register/register.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { TextInputComponent } from './shared/components/molecules/text-input/text-input.component';
import { SafeUrlPipe } from './shared/pipe/safe-url.pipe';
import { AdminGuard } from './shared/guards/admin.guard';
import { CapitalizePipe } from './shared/pipe/capitalize.pipe';
import { LowerPipe } from './shared/pipe/lower.pipe';
import { CapitalizeLetterAtPipe } from './shared/pipe/capitalize-letter-at.pipe';
import { ColorLetterDirective } from './shared/directives/color-letter.directive';


const components = [
  RegisterComponent,
  QuestionsComponent,
  HeaderComponent,
  AboutComponent,
  QuestionsListComponent,
  QuestionEditComponent,
  QuestionCreateComponent,
  QuestionsTableComponent,
  QuestionsFormComponent,
  TextInputComponent,
  NumberInputComponent
];

@NgModule({
  declarations: [
    AppComponent,
    components,
    SafeUrlPipe,
    CapitalizePipe,
    LowerPipe,
    CapitalizeLetterAtPipe,
    ColorLetterDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      participant: participantReducer,
      questions: questionsReducer
    }, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionWithinNgZone: true
      }
    }),
    EffectsModule.forRoot([QuestionEffects, ParticipantEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [
    QuestionsService,
    ParticipantService,
    AdminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
