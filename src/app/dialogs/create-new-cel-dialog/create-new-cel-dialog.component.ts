import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create-new-cel-dialog',
  templateUrl: './create-new-cel-dialog.component.html',
  styleUrls: ['./create-new-cel-dialog.component.css', '../../styles/shared-dialog-styles.css']
})
export class CreateNewCelDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateNewCelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onCloseClick = () => {
    this.dialogRef.close();
  }

}
