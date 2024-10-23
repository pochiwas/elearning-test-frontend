import { Injectable } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthService, private router: Router) {}

  CanActivateFn(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // Verifica si el usuario está autenticado
    if (this.authService.isAuthenticated()) {
      return true;  // Permitir el acceso
    } else {
      // Si no está autenticado, redirigir al login
      this.router.navigate(['/']);
      return false;
    }
  }
}
