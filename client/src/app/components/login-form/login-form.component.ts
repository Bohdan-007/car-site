import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})


export class LoginFormComponent {
  constructor(
    private userService: UserService,
    private router: Router,
  ) { };

  loginForm: FormGroup = new FormGroup({
    'email': new FormControl('', [
      Validators.required,
      Validators.email,
    ]),

    'password': new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });


  submit() {
    const user = new User(
      '',
      this.loginForm.value.email,
      this.loginForm.value.password,
    );

    this.userService.login(user).subscribe({
      next: () => {
        this.router.navigate(['/auth/home']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  };

};
