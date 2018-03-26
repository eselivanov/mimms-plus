import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Practitioner } from '../../models/practitioner';

@Component({
  selector: 'app-pin-entry',
  templateUrl: './pin-entry.component.html',
  styleUrls: ['./pin-entry.component.css']
})
export class PinEntryComponent implements OnInit {
  pin = new FormControl('', [Validators.required]);
  hide = true
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    if (!this.userService.userName){
      this.goToUserSelect()
    }
  }

  goToUserSelect() {
    this.router.navigate(['/login']);
  }

  login() {
    this.userService.getUser().subscribe(
    data => {
      this.userService.storeUser(data);
      this.userService.user = new Practitioner(data)
      this.router.navigate(['/clinics']);
    },
    error => {
      
    })
   
  }

}
