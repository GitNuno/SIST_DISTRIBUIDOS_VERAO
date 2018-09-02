import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// REF: \AUTH\.5\(min.11.30)
import {RouterModule, Routes} from '@angular/router';

// REF: \zVIDEO\15(min.02.00)
// array de rotas
// refere qual o componente a renderizar de acordo com a rota
const appRoutes: Routes = [
  // rotas users
  {path:'', component:HomeComponent},                  // path:'' - porque é home
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'profile', component:ProfileComponent},
  // rotas app-video_player
  {path:'videos', component:VideoCenterComponent}     // notar que rota não tem de ser video-center
]

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VideoCenterComponent } from './components/video-center/video-center.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    VideoCenterComponent,
    VideoListComponent,
    VideoDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }