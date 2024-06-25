import { CUSTOM_ELEMENTS_SCHEMA , NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { SideBarComponent } from './components/dash-board/side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ManagementComponent } from './components/dash-board/management/management.component';
import { StatisticsComponent } from './components/dash-board/statistics/statistics.component';
import { AppRoutingModule } from '../app-routing.module';
import { register } from 'swiper/element/bundle';
import { UserslistComponent } from './components/dash-board/management/userslist/userslist.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
register();


@NgModule({
  declarations: [

    DashBoardComponent,
    SideBarComponent,
    ManagementComponent,
    StatisticsComponent,
    UserslistComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DashboardModule { }
