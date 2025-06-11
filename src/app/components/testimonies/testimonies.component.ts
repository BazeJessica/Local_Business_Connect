import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonies',
  standalone: false,
  templateUrl: './testimonies.component.html',
  styleUrl: './testimonies.component.scss'
})
export class TestimoniesComponent {
   testimonials = [
    {
      description: "Found an amazing plumber through ServiceConnect who fixed our emergency leak within 2 hours. The booking process was so smooth!",
      customer: "Sarah M., San Francisco"
    },
    {
      description: "I was able to read authentic reviews from real customers and made an informed decision. The service was top-notch!",
      customer: "John D., Los Angeles"
    },
    {
      description: "Booking an appointment was so easy! I was able to schedule a consultation for the same day. No hassle at all.",
      customer: "Emily R., Chicago"
    },
    {
      description: "The professionals I booked through ServiceConnect were all background-checked and insured. I felt completely at ease with them.",
      customer: "David P., New York"
    },
    {
      description: "I needed a last-minute electrician, and ServiceConnect made it so easy to find one with the right skills. The process was fast and stress-free.",
      customer: "Olivia T., Miami"
    },
    {
      description: "I love that I can find local businesses with verified reviews. It made my decision to hire a house cleaner so much easier.",
      customer: "Jake F., Houston"
    },
    {
      description: "Booked a massage therapist for a weekend getaway. The booking was instant, and the experience was amazing. Highly recommend!",
      customer: "Sophia L., Austin"
    },
    {
      description: "I was able to quickly find a reliable handyman to help with a few repairs around the house. The service was quick, professional, and affordable.",
      customer: "Mark C., Denver"
    }
  ];
  
}
