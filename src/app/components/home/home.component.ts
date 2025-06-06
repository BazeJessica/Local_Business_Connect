import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  valueItems = [
    {
      icon: "🔍",
      title: "Easy Discovery",
      description: "Find qualified professionals in your area with our smart search and filtering system"
    },
    {
      icon: "⭐",
      title: "Verified Reviews",
      description: "Read authentic reviews from real customers to make informed decisions"
    },
    {
      icon: "📅",
      title: "Instant Booking",
      description: "Book appointments online 24/7 with real-time availability"
    },
    {
      icon: "🛡️",
      title: "Secure & Safe",
      description: "All professionals are background-checked and insured for your peace of mind"
    }
  ];  

}
