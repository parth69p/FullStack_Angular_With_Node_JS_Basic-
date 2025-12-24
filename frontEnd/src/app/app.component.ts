import { Component } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEnd';

  username = '';
  result: any;       
  errorMsg = '';

  constructor(private loginService: MyService) {}

  
  submit() {
    this.loginService.login(this.username)
      .then(response => {
        this.result = response.data;   //  storing  backend data here
        this.errorMsg = '';
      })
      .catch(error => {
        this.errorMsg = 'Login failed';
        this.result = null;
      });
  }
}
