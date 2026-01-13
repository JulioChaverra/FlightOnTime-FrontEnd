import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './auth/auth.guard';
import { VuelosComponent } from './pages/vuelos/vuelos.component';
import { DetalleVueloComponent } from './pages/detalle-vuelo/detalle-vuelo.component';

const routes: Routes = [

  // 🔓 Públicas
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // 🔐 Protegidas
  {
    path: '',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'vuelo',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: VuelosComponent
      },
      {
        path: 'vuelo',
        component: DetalleVueloComponent
      }
    ]
  },

  // ❌ Not found
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
