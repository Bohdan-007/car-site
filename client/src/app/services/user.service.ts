import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, delay, of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class UserService {
  constructor(private http: HttpClient) { };

  url: string = 'http://localhost:3000/users';

  isAuthenticated: boolean = false;
  userNameForHeader: string = 'Test User';

  login(user: User): Observable<any> {
    if (user.email === 'test@gmail.com' && user.password === '1234') {
      this.isAuthenticated = true;
      return of({}).pipe(delay(1000));
    };

    return throwError(() => 'User not found.');
  };

  register(user: User) {
    this.isAuthenticated = true;
    return this.http.post(this.url, user);
    // return of({}).pipe(delay(1000));
  };

  logout() { };

  getUsers() {
    return this.http.get(this.url);
  };
};
