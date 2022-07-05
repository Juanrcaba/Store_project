import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
export interface Iproduct{
  name:string,
  price:number,
  quantity: number,
  category: string
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFireDatabase) { }

  async getProducts(){
    return await  new Promise((resolve)=>{
      this.db.list('products').valueChanges().subscribe(data=>{
        resolve(data)
      })
    })
  }
}
