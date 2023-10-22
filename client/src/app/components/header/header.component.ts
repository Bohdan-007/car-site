import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
// import { User } from 'src/app/models/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent {
  constructor(private userService: UserService) { };

  userName: string = this.userService.userNameForHeader;

};
