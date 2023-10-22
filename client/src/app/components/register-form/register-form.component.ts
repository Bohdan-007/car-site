import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})


export class RegisterFormComponent {
  constructor(
    private userService: UserService,
    private router: Router,
  ) { };

  registerForm: FormGroup = new FormGroup({
    'userName': new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),

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
    this.userService.getUsers().subscribe((data: any) => {
      const users: [{}] = data;
      const isNewUserInArray: any = users.find((user: any) => user.email === this.registerForm.value.email);

      if (!isNewUserInArray) {
        const user = new User(
          this.registerForm.value.userName,
          this.registerForm.value.email,
          this.registerForm.value.password,
        );

        this.userService.register(user).subscribe({
          next: () => {
            this.router.navigate(['/auth/home']);
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
      else {
        console.log('User with this email already exists');
      }
    });

  };

};
