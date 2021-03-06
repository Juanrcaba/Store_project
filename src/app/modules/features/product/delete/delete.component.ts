import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  result = true;
  constructor(public dialogRef: MatDialogRef<DeleteComponent>
   ) { }

  ngOnInit(): void {
  }
  onNoClick(){
    this.dialogRef.close();
  }
}
