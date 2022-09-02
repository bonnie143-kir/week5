import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  age = 0;
  email = "";
  password = "";
  username = "";
  birthdate = "";
  isLoggedIn = false;
  isEdit = false;
  isDone = false;
  isLoggedOut = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navbyURL(){
    this.router.navigateByUrl('/profile');
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
    //sessionStorage.setItem('age', this.age);

  }

  done(){
    this.isEdit = false;

    let userObj = [
      {'user': sessionStorage.getItem(this.username)},
      {'email': sessionStorage.getItem(this.email)},
      {'birthdate': sessionStorage.getItem(this.birthdate)},
      //{'age': sessionStorage.getItem(this.age)}
    ]
  }

  logOut(){
    this.isLoggedOut = true;
    this.router.navigateByUrl('/login');
  }

}
