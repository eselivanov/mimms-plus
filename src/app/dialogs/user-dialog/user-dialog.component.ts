import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../authentication-feature/services/user.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css', '../../styles/shared-dialog-styles.css', '../../styles/shared-styles.css']
})
export class UserDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public userService: UserService,
  ) { }

  ngOnInit() {
    
  }

  onCloseClick = () => {
    this.dialogRef.close();
  }

}
