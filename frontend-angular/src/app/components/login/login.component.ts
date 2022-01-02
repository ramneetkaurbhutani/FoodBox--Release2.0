import { Component, OnInit } from '@angular/core';
import {  OktaAuthService } from '@okta/okta-angular';

import myAppConfig from '../../config/my-app-config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  oktaSignIn: any;
  
  constructor(private oktaAuthService: OktaAuthService) { }

  ngOnInit(): void {
  }

}
