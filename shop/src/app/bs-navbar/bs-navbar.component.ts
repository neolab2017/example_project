import { AppUser } from './../models/app-user';
import { UserService } from './../user.service';
import { AuthService } from './../auth.service';
import { Component, OnInit, OnDestroy  } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/Observable/of';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit  {

 isAdmin: boolean;

  constructor(public auth: AuthService, private UserService:UserService) {     
   
   }

   ngOnInit () {
    
    this.auth.user$.subscribe(user => {
      if(user) {
        this.UserService.get(user.uid).subscribe(user => {        
          this.isAdmin=user.isAdmin          
        });
      }  else {
        return Observable.of(null)
      }
      
    })    
      }   


  LogOut () {

    this.auth.logout();

  }



}
