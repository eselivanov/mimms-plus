import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.css']
})
export class UserSelectComponent implements OnInit {
  user = new FormControl('', [Validators.required]);
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
  }

  goToPin() {
    console.log(this.user.value)
    this.userService.userName = this.user.value
    this.router.navigate(['/login/pin']);
  }

}
