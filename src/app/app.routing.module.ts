import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent }, // Ruta principal (página de inicio)
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Ruta protegida
  { path: '**', redirectTo: '', pathMatch: 'full' } // Ruta comodín que redirige al login si no se encuentra la ruta
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
