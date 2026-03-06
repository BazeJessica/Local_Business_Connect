import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  standalone: false,
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  stats = [
    {
      title: 'Total Views',
      value: 2847,
      change: '+12%',
      trend: '/assets/image/trending_up.png',
      icon: "/assets/image/visibility.png",
      note: 'from last week'
    },
    {
      title: 'Bookings',
      value: 143,
      change: '+8%',
      trend: '/assets/image/trending_up.png',
      icon: "/assets/image/calendar.png",
      note: 'from last week'
    },
    {
      title: 'Revenue',
      value: '$12,450',
      change: '-3%',
      trend: '/assets/image/trending_down.png',
      icon: "/assets/image/money.png",
      note: 'from last week'
    },
    {
      title: 'Customers',
      value: 89,
      change: '+15%',
      trend: '/assets/image/trending_up.png',
      icon: "/assets/image/people.png",
      note: 'from last week'
    }
  ];

  recentBookings = [
    {
      name: 'Sarah Johnson',
      service: 'Premium Massage',
      time: '2:00 PM',
      status: 'confirmed'
    },
    {
      name: 'Mike Chen',
      service: 'Hair Cut',
      time: '3:30 PM',
      status: 'pending'
    },
    {
      name: 'Emily Davis',
      service: 'Facial Treatment',
      time: '4:00 PM',
      status: 'confirmed'
    }
  ];

  metrics = [
    {
      name: 'Booking Rate',
      percent: 78,
      color: '#3b82f6'
    },
    {
      name: 'Customer Satisfaction',
      percent: 92,
      color: '#10b981'
    },
    {
      name: 'Response Time',
      percent: 85,
      color: '#facc15'
    }
  ];
}

