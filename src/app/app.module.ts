import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}  from '@angular/common/http'
import { AppComponent } from './app.component';
import { GithubuserComponent } from './githubuser/githubuser.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { ShowusergithubComponent } from './showusergithub/showusergithub.component';
@NgModule({
  declarations: [
    AppComponent,
    GithubuserComponent,
    ShowusergithubComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
