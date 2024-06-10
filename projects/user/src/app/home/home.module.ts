import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';
import { SideBarComponent } from './components/home/side-bar/side-bar.component';
import { TemplatesComponent } from './components/home/templates/templates.component';
import { OpenedProjectsComponent } from './components/home/opened-projects/opened-projects.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';
import { DubbingFormComponent } from './components/home/dubbing-form/dubbing-form.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SideBarComponent,
    TemplatesComponent,
    OpenedProjectsComponent,
    DubbingFormComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
    DashboardModule,
    HttpClientModule,
    FormsModule
  ],
})
export class HomeModule { }
