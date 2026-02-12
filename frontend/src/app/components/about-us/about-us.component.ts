import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  stats = [
    { icon: "assets/housing.png", value: '15,000+', label: 'Partner Businesses' },
    { icon: "assets/image/people.png", value: '250,000+', label: 'Active Customers' },
    { icon: "assets/image/calendar.png", value: '1M+', label: 'Bookings Completed' },
    { icon: "assets/location-on.png", value: '50+', label: 'Cities Served' }
  ];
  businessBenefits = [
    { icon: "assets/image/trending_up.png", title: 'Increased Visibility', description: 'Reach more local customers through our extensive network and search optimization.' },
    { icon: "assets/image/calendar.png", title: 'Booking Management', description: 'Streamlined appointment system with automated confirmations and reminders.' },
    { icon: "assets/star.png", title: 'Customer Insights', description: 'Detailed analytics on customer behavior, preferences, and booking patterns.' },
    { icon: "assets/Zap.png", title: 'Marketing Tools', description: 'Built-in promotional features, campaigns, and customer retention tools.' }
  ];

   customerBenefits = [
    { icon: "assets/image/people.png", title: 'Easy Discovery', description: 'Find trusted local businesses quickly with smart search and filtering.' },
    { icon: "assets/clock.png", title: 'Convenient Booking', description: '24/7 online scheduling with instant confirmation and flexible options.' },
    { icon: "assets/shield.png", title: 'Transparent Pricing', description: 'Clear, upfront pricing with no hidden fees or surprises.' },
    { icon: "assets/heart.png", title: 'Personalized Experience', description: 'AI-powered recommendations based on your preferences and history.' }
  ];
   teamMembers= [
    { name: 'Sarah Johnson', role: 'CEO & Co-Founder', image: '👩‍💼', bio: 'Former McKinsey consultant with 15+ years in digital transformation.' },
    { name: 'Michael Chen', role: 'CTO & Co-Founder', image: '👨‍💻', bio: 'Ex-Google engineer specializing in scalable platform architecture.' },
    { name: 'Emily Rodriguez', role: 'Head of Business Development', image: '👩‍💻', bio: 'Strategic partnerships expert with deep local market knowledge.' },
    { name: 'David Park', role: 'Head of Product', image: '👨‍🎨', bio: 'UX/UI specialist focused on creating intuitive user experiences.' }
  ];
}
