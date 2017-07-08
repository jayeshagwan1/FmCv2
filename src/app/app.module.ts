import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
