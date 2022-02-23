import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EnguiryComponent } from './enguiry/enguiry.component';
import { ContactusComponent } from './contactus/contactus.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProjectComponent } from './project/project.component';
import { HttpClientModule } from '@angular/common/http';
import { FacultiesComponent } from './faculties/faculties.component';
import { DetailFacultyComponent } from './detail-faculty/detail-faculty.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    EnguiryComponent,
    ContactusComponent,
    StudentdetailComponent,
    RegistrationComponent,
    ProjectComponent,
    FacultiesComponent,
    DetailFacultyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { FormsModule
}
