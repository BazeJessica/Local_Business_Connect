import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services=[
      { name: 'Premium Massage', price: '$120', duration: '90 min', bookings: 45, status: 'active' },
      { name: 'Hair Cut & Style', price: '$65', duration: '60 min', bookings: 38, status: 'active' },
      { name: 'Facial Treatment', price: '$80', duration: '75 min', bookings: 32, status: 'active' },
      { name: 'Manicure & Pedicure', price: '$45', duration: '45 min', bookings: 28, status: 'active' },
      { name: 'Deep Tissue Massage', price: '$100', duration: '60 min', bookings: 22, status: 'active' },
      { name: 'Aromatherapy Session', price: '$90', duration: '60 min', bookings: 15, status: 'inactive' },
  ]
}