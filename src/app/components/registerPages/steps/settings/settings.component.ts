import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: false,
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'] 
})
export class SettingsComponent {
  notifications = [ 
    { label: 'Email notifications for new bookings', checked: true },
    { label: 'SMS notifications for booking confirmations', checked: true },
    { label: 'Push notifications for calendar reminders', checked: false },
    { label: 'Weekly performance reports', checked: true },
    { label: 'Customer review notifications', checked: true }
  ];
  paymentMethod =[
    { label: 'PayPal', checked: true },
    { label: 'Credit Card', checked: true },
    { label: 'Bank Transfer', checked: false },
    { label: 'Cash', checked: false }
  ]
}
