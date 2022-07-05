import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth:AngularFireAuth) { }

 async loginWithEmailAndPassword(email:string,password:string){
  return await new Promise((resolve,reject)=>{
    this.afauth.signInWithEmailAndPassword(email,password).then(res=>resolve(res.user)).catch(err=>reject(err.message))
  })
 }

 async createAccount(email:string,password:string){
    return await new Promise((resolve,reject)=>{
      this.afauth.createUserWithEmailAndPassword(email,password)
      .then(res => resolve(res)).catch(err=> reject(err));
    });
 }

 forgotPassword(email:string){
  return new Promise((resolve,reject)=>{
    this.afauth.sendPasswordResetEmail(email).then(res=>resolve(res)).catch(err=>reject(err.message))
  })
 }
}
