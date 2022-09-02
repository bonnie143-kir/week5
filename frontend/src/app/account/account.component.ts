import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { email, title } from '../global-variables';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  email = email;
  projTitle = title;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navbyurl() {
    this.router.navigateByUrl('/account');
  }

}
