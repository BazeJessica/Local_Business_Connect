import { Component } from '@angular/core';
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  authenticated = false;
  // constructor(private authService: AuthService){

  // }

// get authenticated(){
//   // return this.authService.isAuthenticated();
// }
}
