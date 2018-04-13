import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

//added later
import { FormsModule } from '@angular/forms'; //added to import form modeule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //for animations
import { DataService } from './data.service'; //for data service



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //FormsModue import
    BrowserAnimationsModule //for animations
  ],
  providers: [DataService], //DataService added in providers array
  bootstrap: [AppComponent]
})
export class AppModule { }
