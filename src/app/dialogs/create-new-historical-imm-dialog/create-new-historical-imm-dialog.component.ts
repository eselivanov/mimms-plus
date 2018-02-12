import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create-new-historical-imm-dialog',
  templateUrl: './create-new-historical-imm-dialog.component.html',
  styleUrls: ['./create-new-historical-imm-dialog.component.css']
})
export class CreateNewHistoricalImmDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateNewHistoricalImmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onCloseClick = () => {
    this.dialogRef.close();
  }

}
