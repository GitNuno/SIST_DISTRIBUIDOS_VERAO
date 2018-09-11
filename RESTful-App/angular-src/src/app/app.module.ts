import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// REF: \AUTH\.5\(min.11.30)
import {RouterModule, Routes} from '@angular/router';
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
// \zVIDEO\.21\(min.1.00)
import { SafePipe } from './components/safe.pipe';

// MUDAR(se houver tempo): REF:\ANGULAR-2\ANGULAR_COMPLETO\.24(min.4.00)
// REF: \zVIDEO\15(min.02.00)
// ARRAY DE ROTAS
// "app.module" é o modulo principal a ser chamado
// refere qual o componente a renderizar de acordo com a rota
// endç. localhost:3000/xxx: "/xxx" é definido aqui!
const appRoutes: Routes = [
  // rotas users
  {path: '', component: HomeComponent},                  // path:'' - porque é home
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: ProfileComponent},
  // rotas app-video_player
  // exibição de video-detail e video-list sao tb nesta rota !!
  // endç. localhost:3000/videos: "/videos" é definido aqui!
  {path: 'vid', component: VideoCenterComponent}
];

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
    SafePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
