import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  forgotForm!:FormGroup
  constructor(private formBuild:FormBuilder,private authService:AuthService,private route:Router) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuild.group({
      email:['',Validators.email]
    })
  }

  onForgot(){
    this.authService.forgotPassword(this.forgotForm.value.email).then(()=>this.route.navigate(['/login'])).catch(error=>console.log(error))
  }

}
