import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

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

  goToClinics() {
    this.userService.getUser().subscribe(
    data => {
      console.log(`user resp = ${JSON.stringify(data)}`)
      
      this.userService.user = data
      this.router.navigate(['/clinics']);
    },
    error => {
      
    })
   
  }

}
