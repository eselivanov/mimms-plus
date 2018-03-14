import { Component } from '@angular/core';
import 'hammerjs';
import { Router } from '@angular/router';
import { UserService } from './authentication-feature/services/user.service';

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
      this.userService.user = JSON.parse(userString);
    }else {
      console.log('test')
      this.router.navigate(['/login']);
    }

  }
}
