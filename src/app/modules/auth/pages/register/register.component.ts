import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validateCallback } from '@firebase/util';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private authService:AuthService,private route:Router) { }

  registerForm!: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email:['',Validators.email],
      password:['',Validators.required]
    })
  }

  onCreate(){
    this.authService.createAccount(this.registerForm.value.email,this.registerForm.value.password)
    .then(()=>{
      this.route.navigate(['features'])
    }).catch(err=>console.log(err.message))
  }
}
