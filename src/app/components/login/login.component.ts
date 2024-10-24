import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';

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
  hide:boolean = true;

  constructor(private authService: AuthService, private router: Router) {}

  form = new FormGroup({email:new FormControl(),password: new FormControl()})
  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        this.authService.setToken(response.token);
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.log(error);
        this.errorMessage = 'Credenciales incorrectas';
      },
      () =>{

      }
    );
  }
}
