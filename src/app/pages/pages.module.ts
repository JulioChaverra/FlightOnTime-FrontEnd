import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { VuelosComponent } from './vuelos/vuelos.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from "../app-routing.module";
import { DetalleVueloComponent } from './detalle-vuelo/detalle-vuelo.component';
import { AeropuertosComponent } from './aeropuertos/aeropuertos.component';



@NgModule({
declarations: [
    VuelosComponent,
    RegisterComponent,
    LoginComponent,
    DetalleVueloComponent,
    AeropuertosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
