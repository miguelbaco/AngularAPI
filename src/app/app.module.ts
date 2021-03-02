import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotosComponent } from './fotos/fotos.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { TrivialComponent } from './trivial/trivial.component';

@NgModule({
  declarations: [
    AppComponent,
    FotosComponent,
    TrivialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
