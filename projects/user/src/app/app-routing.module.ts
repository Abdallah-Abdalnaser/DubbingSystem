import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { DubbingComponent } from './dubbing-video/components/dubbing/dubbing.component';
import { VoiceComponent } from './voiceover/components/voice/voice.component';
import { DashBoardComponent } from './dashboard/components/dash-board/dash-board.component';
import { ManagementComponent } from './dashboard/components/dash-board/management/management.component';
import { StatisticsComponent } from './dashboard/components/dash-board/statistics/statistics.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { mainadminGuard } from './gards/mainadmin.guard';
import { mainhomeGuard } from './gards/mainhome.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent , canActivate:[mainhomeGuard] },
  { path: 'DubbingVideo/:id', component: DubbingComponent,canActivate:[mainhomeGuard] },
  { path: 'VoiceOver/:name', component: VoiceComponent , canActivate:[mainhomeGuard]},
  { path: 'DashBoard', component: DashBoardComponent, canActivate: [mainadminGuard], children: [
    { path: 'management', component: ManagementComponent },
    { path: 'statistics', component: StatisticsComponent }
  ]},
  { path: 'auth', component: AuthComponent, children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
  ]},
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
