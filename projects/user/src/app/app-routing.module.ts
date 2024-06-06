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

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"DubbingVideo",component:DubbingComponent},
  {path:"VoiceOver",component:VoiceComponent},
  {path:"DashBoard",component:DashBoardComponent,children:[
    {path:"management",component:ManagementComponent},
    {path:"statiscs",component:StatisticsComponent}
  ]},
  {path:"auth",component:AuthComponent,children:[
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent}
  ]},
  // {path:"**",redirectTo:"/auth"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
