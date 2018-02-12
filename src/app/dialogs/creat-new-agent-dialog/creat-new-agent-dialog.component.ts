import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-creat-new-agent-dialog',
  templateUrl: './creat-new-agent-dialog.component.html',
  styleUrls: ['./creat-new-agent-dialog.component.css', '../../styles/shared-dialog-styles.css']
})
export class CreatNewAgentDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreatNewAgentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onCloseClick = () => {
    this.dialogRef.close();
  }

}
