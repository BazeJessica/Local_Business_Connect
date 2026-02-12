import { Component } from '@angular/core';

@Component({
  selector: 'app-bookings',
  standalone: false,
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss'
})
export class BookingsComponent {
  pendingBooking = [
    { id: '#1234', client: 'Mike Chen', service: 'Hair Cut', date: 'July 8, 2025', time: '3:30 PM' },
    { id: '#1235', client: 'Anna Smith', service: 'Manicure', date: 'July 9, 2025', time: '10:00 AM' },
    { id: '#1236', client: 'John Doe', service: 'Massage', date: 'July 10, 2025', time: '2:00 PM' },
  ]
  confirmedBooking = [
    { id: '#1237', client: 'Sarah Johnson', service: 'Premium Massage', date: 'July 5, 2025', time: '2:00 PM' },
    { id: '#1238', client: 'Emily Davis', service: 'Facial Treatment', date: 'July 6, 2025', time: '4:00 PM' },
    { id: '#1239', client: 'Robert Wilson', service: 'Hair Cut', date: 'July 7, 2025', time: '11:00 AM' },
  ]
}
