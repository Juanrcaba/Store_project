import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
 
  constructor(private formBuilder:FormBuilder,private auth:AuthService,private route:Router) { }

  ngOnInit(): void {
    this.loginForm =  this.formBuilder.group({
      email:['',Validators.email],
      password:['',Validators.required]
    });
  }

  onLogin(){
    if(this.loginForm.valid){
     this.auth.loginWithEmailAndPassword(this.loginForm.value.email,this.loginForm.value.password).then(()=>{
      this.route.navigate(['/product']);
     })
    }
  }
}
