import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  age = "";
  email = "";
  password = "";
  username = "";
  birthdate = "";
  isLoggedIn = true;
  isEdit = false;
  isDone = false;
  isLoggedOut = false;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private httpService: HttpService) { 
    this.age = sessionStorage.getItem("age")!;
    this.email = sessionStorage.getItem("email")!;
    this.username = sessionStorage.getItem("username")!;
    this.birthdate = sessionStorage.getItem("birthdate")!;
  }

  ngOnInit(): void {
  }

  navbyURL(){
    this.router.navigateByUrl('/profile');
  }

  result(){
    this.http.get(URL + '/auth')
    .subscribe(data=> {
      console.log(data);
      if (data == true){
        //this.email = data;
      }
    });
  }

  edit(){
    this.isEdit = true;
    let userObj = {
      'userid': this.username,
      'email': this.email,
      'birthdate': this.birthdate,
      'age':this.age
    }

    sessionStorage.setItem('username', this.username);
    sessionStorage.setItem('email', this.email);
    sessionStorage.setItem('birthdate', this.birthdate);
   // sessionStorage.setItem('age', this.age);

    return userObj;
  }

  done(){
    this.isEdit = false;
    let userObj = [
      {'user': sessionStorage.getItem(this.username)},
      {'email': sessionStorage.getItem(this.email)},
      {'birthdate': sessionStorage.getItem(this.birthdate)},
      // {'age': sessionStorage.getItem(this.age)}
    ]
    return userObj;
  }

  logOut(){
    this.isLoggedOut = true;
    this.router.navigateByUrl('/login');
  }

}
