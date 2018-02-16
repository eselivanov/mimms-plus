import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateNewSpecialConsiderationDialogComponent } from '../create-new-special-consideration-dialog/create-new-special-consideration-dialog.component';

@Component({
  selector: 'app-add-types-dialog',
  templateUrl: './add-types-dialog.component.html',
  styleUrls: ['./add-types-dialog.component.css', '../../styles/shared-dialog-styles.css', '../../styles/shared-styles.css', '../../styles/list-card.css']
})
export class AddTypesDialogComponent implements OnInit {
  type = "";
  constructor(
    public dialogRef: MatDialogRef<AddTypesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.dialogRef.afterClosed().subscribe(result => {
      if (this.type != ""){
        let consentDialogRef = this.dialog.open(CreateNewSpecialConsiderationDialogComponent, {
          width: '80%',
          height: '90%',
          data: { type: this.type }
        });
      }
      
    });
  }

  onCloseClick = () => {
    this.type = ""
    this.dialogRef.close();
  }

  onExemptionClick = (type) => {
    this.type = type
    console.log(this.type)
    this.dialogRef.close();
    /*this.dialogRef.close();
    let consentDialogRef = this.dialog.open(CreateNewSpecialConsiderationDialogComponent, {
      width: '80%',
      height: '90%',
      data: { }
    });*/
  }

}
