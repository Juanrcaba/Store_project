import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MatDialog } from '@angular/material/dialog';
import { Observable, observable } from 'rxjs';
import { DeleteComponent } from './delete/delete.component';
import { SaveComponent } from './save/save.component';

export interface Iproduct{
  id:string,
  name:string,
  price:number,
  qty: number,
  category: string
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  dataSource:any[]= []
 
  displayedColumns =['Name','Qty','Price','Category']
  constructor(private db:AngularFireDatabase, private modal: MatDialog) { }

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts(){
   this.db.list('Products').valueChanges().subscribe((data:any)=>{
    this.dataSource = Object.keys(data).map((key)=> data[key]
    );
    
   })

  }

  openModal(){
    const modalRef = this.modal.open(SaveComponent,{
      width:'250px',
      data:{title:"Insert a new register"}
    });
  }

  onUpdate(product:Iproduct){
    const modalRef = this.modal.open(SaveComponent,{
      width:'250px',
      data : {id:product.id, name:product.name,qty: product.qty ,price: product.price ,category:product.category,title:"Update register" }    
    });
  }
  onDelete(product:Iproduct){ 
    let id =  `${product.id}`
       const modalRef = this.modal.open(DeleteComponent,{
      width:'250px',
       })   
       modalRef.afterClosed().subscribe(res=>{    
        if(res){
          this.db.list('Products').remove(id).then(()=>{            
          }).catch(err=>console.log(err.message));
        }   

       });  
  }
}
