import { Component } from '@angular/core';

@Component({
  selector: 'app-work-flow',
  standalone: false,
  templateUrl: './work-flow.component.html',
  styleUrl: './work-flow.component.scss'
})
export class WorkFlowComponent {
  businessFlow = [
    { step: '1', title: 'Sign Up & Verify', description: 'Create your business profile and verify your credentials in minutes' },
    { step: '2', title: 'Set Up Services', description: 'Add your services, pricing, and availability with our easy-to-use tools' },
    { step: '3', title: 'Go Live', description: 'Start receiving bookings immediately from our network of customers' },
    { step: '4', title: 'Manage & Grow', description: 'Use our analytics and tools to optimize performance and grow your business' }
  ];

  customerFlow = [
    { step: '1', title: 'Browse & Search', description: 'Find businesses by location, service type, or specific needs' },
    { step: '2', title: 'Book Instantly', description: 'Select available time slots and confirm your booking in seconds' },
    { step: '3', title: 'Pay Securely', description: 'Complete payment through our secure, integrated payment system' },
    { step: '4', title: 'Review & Repeat', description: 'Share your experience and easily rebook your favorite services' }
  ]
  activeTab: "businesses" | "customers" = "businesses";
  setActiveTab(tab:"businesses" | "customers"){
    this.activeTab = tab;
  }
}
