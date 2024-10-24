import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input()
  email: string = '';
  @Input()
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response:any) => {
        this.authService.setToken(response.token);
        this.router.navigate(['/dashboard']);
      },
      (error:any) => {
        this.errorMessage = 'Credenciales incorrectas';
      }
    );
  }
}
