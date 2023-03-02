import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PruebaComponent } from './prueba/prueba.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimacionBasicaComponent } from './animacion-basica/animacion-basica.component';
import { AnimacionRutasComponent } from './animacion-rutas/animacion-rutas.component';
import { PersonModule } from './person/person.module';



@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    AnimacionBasicaComponent,
    AnimacionRutasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    PersonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
