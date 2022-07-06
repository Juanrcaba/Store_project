import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

export interface Iproduct{
  id:string,
  name:string,
  price:number,
  quantity: number,
  category: string
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

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
