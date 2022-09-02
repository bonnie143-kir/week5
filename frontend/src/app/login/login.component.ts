import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { HttpService } from '../http.service';

const URL = 'http://localhost:3000';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = ""
  password = ""
  user = {'email': this.email, 'password': this.password};
    

  constructor(private http: HttpClient, private router: Router, private httpService: HttpService) { }

  ngOnInit() {
  }

  loginChck(){
    const headers = new HttpHeaders()
    .set('AUthorization', 'my-auth-token')
    .set('Content-Type','application/json');
    this.http.post(URL + '/auth', JSON.stringify(this.user), {
      headers: headers
    })
    .subscribe(data=> {
      console.log(data);
      if (data == true){ // chk this again
        this.router.navigateByUrl('/account');
      }else{
        alert("invalid login");
      }
    });
  }

  nav(){
    this.router.navigate(['/account/', this.email, this.password]);
  }

}
