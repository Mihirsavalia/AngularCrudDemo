import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { EnguiryComponent } from './enguiry/enguiry.component';
import { ContactusComponent } from './contactus/contactus.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProjectComponent } from './project/project.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { DetailFacultyComponent } from './detail-faculty/detail-faculty.component';


const routes: Routes = [
  {path : '',component : HomeComponent},
  {path : 'About',component : AboutComponent},
  {path : 'contactus',component : ContactusComponent},
  {path : 'enguiry ',component : EnguiryComponent},
  {path : 'studentdetail ',component : StudentdetailComponent},  
  {path : 'registrationdetail ',component : RegistrationComponent}, 
  {path : 'project',component : ProjectComponent},
  {path : 'faculties' , component : FacultiesComponent},
  {path : 'faculty/:id' , component : DetailFacultyComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
