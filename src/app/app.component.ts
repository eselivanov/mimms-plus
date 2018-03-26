import { Component } from '@angular/core';
import 'hammerjs';
import { Router } from '@angular/router';
import { UserService } from './authentication-feature/services/user.service';
import { User } from './models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'm-IMMS';
  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    let userString = this.userService.getStoredUser();
    if (userString) {
      this.userService.user = new User(JSON.parse(userString));
    }else {
      console.log('test')
      this.router.navigate(['/login']);
    }

  }
}
