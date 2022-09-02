import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

const URL = 'http://localhost:3000';

@Component({
  selector: 'app-login',
  inputs: ['email', 'password'],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email = ""
  password = ""
  
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private httpService: HttpService) { }

  ngOnInit(): void {
  }

  loginChck(){
    let user = {'email': this.email, 'password': this.password};
    const headers = new HttpHeaders()
    .set('AUthorization', 'my-auth-token')
    .set('Content-Type','application/json');
    this.http.post(URL + '/auth', JSON.stringify(user), {
      headers: headers
    })
    .subscribe((data:any)=> {
      console.log(data);
      //this.router.navigateByUrl('/profile');
      if (data.valid == true){
        sessionStorage.setItem('age', data.age);
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('password', data.password);
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('birthdate', data.birthdate);
        this.router.navigateByUrl('/profile');
      }else{
        alert("invalid login");
      }
    });
  }

  nav(){
    this.router.navigate(['/account/', this.email, this.password]);
  }

}
