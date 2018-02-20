import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateNewSpecialConsiderationDialogComponent } from '../create-new-special-consideration-dialog/create-new-special-consideration-dialog.component';
import { CreateNoteDialogComponent } from '../create-note-dialog/create-note-dialog.component'
import { CreateNewCelDialogComponent } from '../create-new-cel-dialog/create-new-cel-dialog.component'

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
      console.log(`type ${this.type}`)
      if (this.type == "Clinical Note") {
        console.log('note')
        let noteDialogRef = this.dialog.open(CreateNoteDialogComponent, {
          width: '75%',
          height: '60%',
          data: { }
        });
      }else if (this.type == "Communication Event Log") {
        console.log('cel')
        let celDialogRef = this.dialog.open(CreateNewCelDialogComponent, {
          width: '75%',
          height: '90%',
          data: { }
        });
      }else if (this.type != ""){
        console.log('other')
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

  onOptionClick = (type) => {
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
