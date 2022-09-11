import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Joaquim'

  userData = {
    email: 'joaquin@email.com',
    role: 'Admin'
  }

  userDetails = {
    gender: 'Male',
    age: 51,
    eyecolor: 'Black',
    orientation: 'Bissexual'
  }

  title = 'angular-matheusbattisti';
}
