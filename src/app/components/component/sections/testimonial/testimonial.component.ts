import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: false,
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  testimonials = [
    {
      name: 'Maria Santos',
      role: 'Owner, Luxury Spa & Wellness',
      image: '👩‍🦱',
      quote: 'Since joining the platform, our bookings increased by 300%. The automated scheduling saves us hours every week.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Regular Customer',
      image: '👨‍🦲',
      quote: 'I love how easy it is to find and book services. The app remembers my preferences and suggests exactly what I need.',
      rating: 5
    },
    {
      name: 'Lisa Chang',
      role: 'Owner, Urban Hair Studio',
      image: '👩‍🦳',
      quote: 'The customer insights help us understand our clients better. We\'ve improved our service quality significantly.',
      rating: 5
    },
    {
      name: 'Carlos Mendes',
      role: 'Manager, Elite Fitness Club',
      image: '🏋️‍♂️',
      quote: 'We’ve streamlined our member check-ins and class scheduling. The platform is intuitive and reliable.',
      rating: 4
    },
    {
      name: 'Anita Patel',
      role: 'Frequent User',
      image: '🧕',
      quote: 'Booking sessions and keeping track of my appointments has never been easier. I recommend it to all my friends!',
      rating: 3
    },
    {
      name: 'David Kim',
      role: 'Owner, Glow Skincare Lounge',
      image: '💆‍♂️',
      quote: 'This tool has helped us reduce no-shows dramatically. Our clients love the reminders and easy rebooking.',
      rating: 5
    }
  ];  
  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
  
}
