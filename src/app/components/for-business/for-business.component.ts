import { Component } from '@angular/core';

@Component({
  selector: 'app-for-business',
  standalone: false,
  templateUrl: './for-business.component.html',
  styleUrl: './for-business.component.scss'
}) 
export class ForBusinessComponent {
  businesses = [
    {
      id: 1,
      name: 'Sparkle Cleaners',
      category: 'Home Service',
      description: 'Expert cleaning and laundry services at your doorstep.',
      img: '/assets/BusinessImage/Sparkling.png'
    },
    {
      id: 2,
      name: 'IronPro Services',
      category: 'Home Service',
      description: 'Professional ironing with doorstep pickup and delivery.',
      img: '/assets/BusinessImage/IronPro.png'
    },
    {
      id: 3,
      name: 'Glow Beauty Spa',
      category: 'Beauty & Wellness',
      description: 'Braiding, massage, manicure and more.',
      img: '/assets/BusinessImage/BeautySpa.png'
    },
    {
      id: 4,
      name: 'Flex Gym & Coaching',
      category: 'Fitness & Health',
      description: 'Fitness sessions and personal training available.',
      img: '/assets/BusinessImage/flexGym.png'
    },
    {
      id: 5,
      name: 'BookLounge',
      category: 'Books',
      description: 'Rent books, join book clubs, or get writing help.',
      img: '/assets/BusinessImage/booklounge.png'
    },
    {
      id: 6,
      name: 'Delish Bites',
      category: 'Food',
      description: 'Tasty pastries, cakes, and smoothies.',
      img: '/assets/BusinessImage/delisgBite.png'
    },
    {
      id: 7,
      name: 'Athletix Arena',
      category: 'Sports',
      description: 'Organized football, volleyball, and netball events.',
      img: '/assets/BusinessImage/athlecticAR.png'
    },
    {
      id: 8,
      name: 'TechFix Repairs',
      category: 'Home Service',
      description: 'Phone, laptop, and appliance repair services.',
      img: '/assets/BusinessImage/TechFix.png'
    },
    {
      id: 9,
      name: 'Happy Paws Grooming',
      category: 'Beauty & Wellness',
      description: 'Pet grooming, walking, and training for your furry friends.',
      img: '/assets/BusinessImage/PetGrooming.png'
    },
    {
      id: 10,
      name: 'Urban Tailors',
      category: 'Beauty & Wellness',
      description: 'Custom tailoring and outfit adjustments.',
      img: '/assets/BusinessImage/UrbanTailor.png'
    },
    {
      id: 11,
      name: 'ByteWise Tutors',
      category: 'Books',
      description: 'Online tutoring in coding, math, and science.',
      img: '/assets/BusinessImage/Bytewise.png'
    },
    {
      id: 12,
      name: 'GreenScape Designs',
      category: 'Home & Service',
      description: 'Landscaping, garden setup, and maintenance services.',
      img: '/assets/BusinessImage/greenescape.png'
    },
    {
      id: 13,
      name: 'SnapShot Studios',
      category: 'Beauty & Wellness',
      description: 'Portraits, events, and commercial photo sessions.',
      img: '/assets/BusinessImage/snapStudios-.png'
    },
    {
      id: 14,
      name: 'QuickMed Pharmacy',
      category: 'Fitness & Health',
      description: 'Prescription and OTC medicine delivery.',
      img: '/assets/BusinessImage/quickmed.png'
    },
    {
      id: 15,
      name: 'RideNow Bikes',
      category: 'Transport',
      description: 'Bike rentals and delivery logistics.',
      img: '/assets/BusinessImage/ridenow.png'
    }
  ];  

  Categories = [
    { viewValue: 'Home Service'},
    { viewValue: 'Beauty & Wellness'},
    { viewValue: 'Fitness & Health'},
    { viewValue: 'Books'},
    { viewValue: 'Food'},
    { viewValue: 'Sports'}
    
  ];

}
