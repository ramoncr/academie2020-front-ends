import { AboutComponent } from './about/about.component';
import { AdminGuard } from './shared/guards/admin.guard';
import { NgModule } from '@angular/core';
import { QuestionCreateComponent } from './admin/question-create/question-create.component';
import { QuestionEditComponent } from './admin/question-edit/question-edit.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsListComponent } from './admin/questions-list/questions-list.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';

// Lazy loading only for modules
const routes: Routes = [
  {
    path: '*',
    redirectTo: 'register'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'questions',
    component: QuestionsComponent
  },
  {
    path: 'admin/questions/create',
    component: QuestionCreateComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin/questions/:id',
    component: QuestionEditComponent,
    canActivate: [AdminGuard]

  },
  {
    path: 'admin/questions',
    component: QuestionsListComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
