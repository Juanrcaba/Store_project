import { Component, Inject, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { stringify } from '@firebase/util';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {
  categories = ['Food','Detergent','Textile']
  @Input() title:string= this.data.title;

  dataForm!: FormGroup;

  constructor(private builder:FormBuilder, private db: AngularFireDatabase,
    public dialogRef: MatDialogRef<SaveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {
      this.dataForm = this.builder.group({
        id:[''],
        name:['',Validators.required],
        qty:['',Validators.required],
        price:['',Validators.required],
        category:['',Validators.required]
      })
      if(this.data!=null)
      this.fillForm()
  }
  onSaveData(){
    let now;
    if(this.dataForm.controls['id'].value !=""){
      this.db.database.ref('Products/' + this.dataForm.controls['id'].value).set(this.dataForm.value);
      console.log("Updated")
    }else{
      console.log(this.dataForm.controls['id'].value)
      now = Date.now();
      this.dataForm.controls['id'].setValue(now)
       this.db.database.ref('Products/' + now).set(this.dataForm.value);
       console.log("Inserted")
      }
      this.dialogRef.close();    
    }
  
    fillForm(){
        this.dataForm.patchValue({
          id:[this.data.id],
          name:[this.data.name],
          qty:[this.data.qty],
          price:[this.data.price],
          category:this.data.category
        })
        console.log(this.data)
    }
}
