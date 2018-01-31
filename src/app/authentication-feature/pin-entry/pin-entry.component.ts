import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

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
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToUserSelect() {
    this.router.navigate(['/login']);
  }

  goToClinics() {
    this.router.navigate(['/clinics']);
  }

}
