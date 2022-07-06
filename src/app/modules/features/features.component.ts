import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  showFiller = true;
  constructor(private auth: AuthService,private route:Router) { }

  ngOnInit(): void {
  }

  onLogOut(){
    this.auth.logOut().then(()=>{
      this.route.navigate(['/login']);
    }).catch(err=>{
      console.log(err.message)
    })
  }
}
