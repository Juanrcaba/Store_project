import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../service/product.service';

export interface Iproduct{
  name:string,
  price:number,
  quantity: number,
  category: string
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  dataSource:Iproduct[]= []
  displayedColumns =['Name','Qty','Price','Category']
  constructor(private db:AngularFireDatabase) { }

  ngOnInit(): void {
  }

  async getProducts(){
   
      this.db.list('products').valueChanges().subscribe((data:any)=>{
      this.dataSource = data;
      })
    
  }
   

}


