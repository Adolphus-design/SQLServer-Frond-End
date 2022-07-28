import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [

  {path: 'regForm', component: RegFormComponent},
  {path: 'student', component: StudentComponent},
  {path: 'regForm', component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
