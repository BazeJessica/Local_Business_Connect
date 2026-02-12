import { Component } from '@angular/core';
// import { AuthService } from '../services/auth.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog as Mat } from '@angular/material/dialog';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  authenticated = false;
  constructor(private dialog: Mat) {}

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  
  closeMenu() {
    this.menuOpen = false;
  }
  // constructor(private authService: AuthService){

  // }

// get authenticated(){
//   // return this.authService.isAuthenticated();
// }
}
