import { Component } from '@angular/core';

@Component({
  selector: 'app-business-services',
  standalone: false,
  templateUrl: './business-services.component.html',
  styleUrl: './business-services.component.scss'
})
export class BusinessServicesComponent {
  businesses = [
    // Existing businesses...
    {
      id: 16,
      name: 'FixIt Handyman',
      category: 'Home Service',
      description: 'Comprehensive home repair and maintenance solutions.',
      img: '/assets/BusinessImage/fixit-handyman.png'
    },
    {
      id: 17,
      name: 'FreshCarpet Cleaners',
      category: 'Home Service',
      description: 'Deep carpet and upholstery cleaning services.',
      img: '/assets/BusinessImage/freshcarpet.png'
    },
    {
      id: 18,
      name: 'PipeMasters Plumbing',
      category: 'Home Service',
      description: '24/7 emergency plumbing and pipe installation.',
      img: '/assets/BusinessImage/pipermasters.png'
    },
    {
      id: 19,
      name: 'SafeHome Security',
      category: 'Home Service',
      description: 'Smart home security system installation and monitoring.',
      img: '/assets/BusinessImage/safehome-security.png'
    },
    {
      id: 20,
      name: 'SolarFlow Energy',
      category: 'Home Service',
      description: 'Solar panel installation and renewable energy solutions.',
      img: '/assets/BusinessImage/solarflow.png'
    },
    {
      id: 21,
      name: 'Luxe Nails Salon',
      category: 'Beauty & Wellness',
      description: 'Premium manicure, pedicure, and nail art services.',
      img: '/assets/BusinessImage/luxe-nails.png'
    },
    {
      id: 22,
      name: 'Serene Yoga Studio',
      category: 'Beauty & Wellness',
      description: 'Yoga classes, meditation sessions, and wellness workshops.',
      img: '/assets/BusinessImage/serene-yoga.png'
    },
    {
      id: 23,
      name: 'Royal Barbershop',
      category: 'Beauty & Wellness',
      description: 'Traditional and modern haircuts, shaves, and grooming.',
      img: '/assets/BusinessImage/royal-barbershop.png'
    },
    {
      id: 24,
      name: 'Tranquil Massage Therapy',
      category: 'Beauty & Wellness',
      description: 'Therapeutic and relaxation massage treatments.',
      img: '/assets/BusinessImage/tranquil-massage.png'
    },
    {
      id: 25,
      name: 'Aura Skincare Clinic',
      category: 'Beauty & Wellness',
      description: 'Facial treatments, skincare consultations, and products.',
      img: '/assets/BusinessImage/aura-skincare.png'
    },
    {
      id: 26,
      name: 'CrossFit Warriors',
      category: 'Fitness & Health',
      description: 'High-intensity functional training and group workouts.',
      img: '/assets/BusinessImage/crossfit-warriors.png'
    },
    {
      id: 27,
      name: 'AquaFit Swim School',
      category: 'Fitness & Health',
      description: 'Swimming lessons for all ages and aquatic fitness classes.',
      img: '/assets/BusinessImage/aquafit.png'
    },
    {
      id: 28,
      name: 'Zenith Nutrition',
      category: 'Fitness & Health',
      description: 'Personalized diet plans and nutritional counseling.',
      img: '/assets/BusinessImage/zenith-nutrition.png'
    },
    {
      id: 29,
      name: 'PhysioCare Center',
      category: 'Fitness & Health',
      description: 'Physical therapy and rehabilitation services.',
      img: '/assets/BusinessImage/physiocare.png'
    },
    {
      id: 30,
      name: 'Mindful Meditation Hub',
      category: 'Fitness & Health',
      description: 'Meditation classes and mental wellness programs.',
      img: '/assets/BusinessImage/mindful-meditation.png'
    },
    {
      id: 31,
      name: 'Scholar\'s Corner',
      category: 'Books',
      description: 'Academic textbooks, study guides, and tutoring resources.',
      img: '/assets/BusinessImage/scholars-corner.png'
    },
    {
      id: 32,
      name: 'ComicVerse',
      category: 'Books',
      description: 'Graphic novels, manga, and comic book collections.',
      img: '/assets/BusinessImage/comicverse.png'
    },
    {
      id: 33,
      name: 'Literary Cafe',
      category: 'Books',
      description: 'Coffee shop with book borrowing and author meetups.',
      img: '/assets/BusinessImage/literary-cafe.png'
    },
    {
      id: 34,
      name: 'Children\'s Wonderland',
      category: 'Books',
      description: 'Kids books, storytelling sessions, and educational toys.',
      img: '/assets/BusinessImage/childrens-wonderland.png'
    },
    {
      id: 35,
      name: 'Digital Library Pro',
      category: 'Books',
      description: 'E-book subscriptions and audiobook rentals.',
      img: '/assets/BusinessImage/digital-library.png'
    },
    {
      id: 36,
      name: 'Global Flavors Kitchen',
      category: 'Food',
      description: 'International cuisine with rotating weekly specials.',
      img: '/assets/BusinessImage/global-flavors.png'
    },
    {
      id: 37,
      name: 'FarmFresh Organics',
      category: 'Food',
      description: 'Organic produce delivery and farm-to-table meals.',
      img: '/assets/BusinessImage/farmfresh.png'
    },
    {
      id: 38,
      name: 'BrewMaster Coffee',
      category: 'Food',
      description: 'Artisan coffee roasting and specialty brews.',
      img: '/assets/BusinessImage/brewmaster.png'
    },
    {
      id: 39,
      name: 'SweetTreats Bakery',
      category: 'Food',
      description: 'Custom cakes, pastries, and dessert catering.',
      img: '/assets/BusinessImage/sweettreats.png'
    },
    {
      id: 40,
      name: 'VeganVibe Cafe',
      category: 'Food',
      description: '100% plant-based meals and vegan comfort food.',
      img: '/assets/BusinessImage/veganvibe.png'
    },
    {
      id: 41,
      name: 'TennisPro Academy',
      category: 'Sports',
      description: 'Tennis lessons, court rentals, and tournament hosting.',
      img: '/assets/BusinessImage/tennispro.png'
    },
    {
      id: 42,
      name: 'SwimChamp Training',
      category: 'Sports',
      description: 'Competitive swimming coaching and water safety courses.',
      img: '/assets/BusinessImage/swimchamp.png'
    },
    {
      id: 43,
      name: 'Martial Arts Dojo',
      category: 'Sports',
      description: 'Karate, taekwondo, and self-defense classes.',
      img: '/assets/BusinessImage/martial-arts-dojo.png'
    },
    {
      id: 44,
      name: 'Adventure Sports Hub',
      category: 'Sports',
      description: 'Rock climbing, hiking trips, and outdoor equipment rental.',
      img: '/assets/BusinessImage/adventure-sports.png'
    },
    {
      id: 45,
      name: 'Golf Masters Club',
      category: 'Sports',
      description: 'Golf lessons, driving range, and equipment sales.',
      img: '/assets/BusinessImage/golf-masters.png'
    }
  ];
  
  // Also update your Categories array to include all categories from the new businesses:
  Categories = [
    { viewValue: 'Home Service'},
    { viewValue: 'Beauty & Wellness'},
    { viewValue: 'Fitness & Health'},
    { viewValue: 'Books'},
    { viewValue: 'Food'},
    { viewValue: 'Sports'},
    { viewValue: 'Transport'} // From your existing businesses
  ];

}
