import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profile = [
    { day: 'Monday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ]

  reviews = [
    { stars: 5, count: 89, percentage: 70 },
    { stars: 4, count: 28, percentage: 22 },
    { stars: 3, count: 7, percentage: 6 },
    { stars: 2, count: 2, percentage: 2 },
    { stars: 1, count: 1, percentage: 1 },
  ]
}
