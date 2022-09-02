import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = ""
  password = ""

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  loginChck(){
    let user = {'email': this.email, 'password': this.password};
    this.http.get('url').subscribe(res => {
      // this.email = res.email;
      // this.password = res.password;
    });
  }

}
