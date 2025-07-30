import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {
  customers = [
    { name: 'Sarah Johnson', email: 'sarah@email.com', phone: '+1 (555) 123-4567', bookings: 12, spent: '$1,240', lastVisit: '2025-07-03', status: 'VIP' },
    { name: 'Mike Chen', email: 'mike@email.com', phone: '+1 (555) 234-5678', bookings: 8, spent: '$680', lastVisit: '2025-07-01', status: 'Regular' },
    { name: 'Emily Davis', email: 'emily@email.com', phone: '+1 (555) 345-6789', bookings: 15, spent: '$1,850', lastVisit: '2025-07-02', status: 'VIP' },
    { name: 'Robert Wilson', email: 'robert@email.com', phone: '+1 (555) 456-7890', bookings: 5, spent: '$420', lastVisit: '2025-06-28', status: 'Regular' },
    { name: 'Anna Smith', email: 'anna@email.com', phone: '+1 (555) 567-8901', bookings: 9, spent: '$750', lastVisit: '2025-07-04', status: 'Regular' },
  
    // Additional customers
    { name: 'James Lee', email: 'james@email.com', phone: '+1 (555) 678-9012', bookings: 11, spent: '$990', lastVisit: '2025-07-05', status: 'VIP' },
    { name: 'Olivia Brown', email: 'olivia@email.com', phone: '+1 (555) 789-0123', bookings: 6, spent: '$510', lastVisit: '2025-07-06', status: 'Regular' },
    { name: 'Daniel Martinez', email: 'daniel@email.com', phone: '+1 (555) 890-1234', bookings: 13, spent: '$1,130', lastVisit: '2025-07-02', status: 'VIP' },
    { name: 'Grace Kim', email: 'grace@email.com', phone: '+1 (555) 901-2345', bookings: 4, spent: '$390', lastVisit: '2025-06-30', status: 'Regular' },
    { name: 'Liam Anderson', email: 'liam@email.com', phone: '+1 (555) 012-3456', bookings: 7, spent: '$620', lastVisit: '2025-07-01', status: 'Regular' },
    { name: 'Sophia Moore', email: 'sophia@email.com', phone: '+1 (555) 123-6789', bookings: 14, spent: '$1,720', lastVisit: '2025-07-03', status: 'VIP' },
    { name: 'David Clark', email: 'david@email.com', phone: '+1 (555) 234-7890', bookings: 3, spent: '$310', lastVisit: '2025-06-27', status: 'Regular' },
    { name: 'Chloe Scott', email: 'chloe@email.com', phone: '+1 (555) 345-8901', bookings: 10, spent: '$880', lastVisit: '2025-07-06', status: 'VIP' },
    { name: 'Ethan Hill', email: 'ethan@email.com', phone: '+1 (555) 456-9012', bookings: 6, spent: '$560', lastVisit: '2025-07-05', status: 'Regular' },
    { name: 'Isabella Green', email: 'isabella@email.com', phone: '+1 (555) 567-0123', bookings: 8, spent: '$670', lastVisit: '2025-07-04', status: 'Regular' }
  ];
  

}
