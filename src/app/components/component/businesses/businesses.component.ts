import { Component } from '@angular/core';

@Component({
  selector: 'app-businesses',
  standalone: false,
  templateUrl: './businesses.component.html',
  styleUrl: './businesses.component.scss'
})
export class BusinessesComponent {
  businesses = [
    {
      id: 1,
      name: 'Sparkle Cleaners',
      category: 'Home Service',
      description: 'Expert cleaning and laundry services at your doorstep.',
      img: 'assets/house-vector.png'
    },
    {
      id: 2,
      name: 'IronPro Services',
      category: 'Home Service',
      description: 'Professional ironing with doorstep pickup and delivery.',
      img: 'assets/house-vector.png'
    },
    {
      id: 3,
      name: 'Glow Beauty Spa',
      category: 'Beauty & Wellness',
      description: 'Braiding, massage, manicure and more.',
      img: 'assets/wellnes.png'
    },
    {
      id: 4,
      name: 'Flex Gym & Coaching',
      category: 'Fitness & Health',
      description: 'Fitness sessions and personal training available.',
      img: 'assets/fitness.png'
    },
    {
      id: 5,
      name: 'BookLounge',
      category: 'Books',
      description: 'Rent books, join book clubs, or get writing help.',
      img: 'assets/book.png'
    },
    {
      id: 6,
      name: 'Delish Bites',
      category: 'Food',
      description: 'Tasty pastries, cakes, and smoothies.',
      img: 'assets/food.png'
    },
    {
      id: 7,
      name: 'Athletix Arena',
      category: 'Sports',
      description: 'Organized football, volleyball, and netball events.',
      img: 'assets/Sport.png'
    },
    // Add as many more as needed...
  ];
visibleBusinesses: any = [];
itemsToShow = 3;

ngOnInit() {
  this.visibleBusinesses= this.businesses.slice(0, this.itemsToShow);
}

showMore() {
  this.itemsToShow += 3;
  this.visibleBusinesses = this.businesses.slice(0, this.itemsToShow);
}

  

}
