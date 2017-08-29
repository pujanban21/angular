import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent   //adding additional component
  ],
  imports: [  //simply add other module to this module
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //for the main component
})
export class AppModule { }
