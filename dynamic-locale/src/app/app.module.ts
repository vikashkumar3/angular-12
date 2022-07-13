import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LocalDatePipe } from './helpers/local-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocalDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  exports:[
    LocalDatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
