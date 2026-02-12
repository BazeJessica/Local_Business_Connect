import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  categories = [
    {
      id: 1,
      name: 'Home Service',
      description: 'Cleaning, Cloth washing, Ironing',
      img: 'assets/house-vector.png',
      url: '/services/home'
    },
    {
      id: 2,
      name: 'Beauty & Wellness',
      description: 'Braiding, Massage, Manicure',
      img: 'assets/wellnes.png',
      url: '/services/beauty'
    },
    {
      id: 3,
      name: 'Fitness & Health',
      description: 'Coaching, Equipment rental, Fitness sessions',
      img: 'assets/fitness.png',
      url: '/services/fitness'
    },
    {
      id: 4,
      name: 'Books',
      description: 'Reading clubs, Book rentals, Writing help',
      img: 'assets/book.png',
      url: '/services/books'
    },
    {
      id: 4,
      name: 'Food',
      description: 'Different food delecacies: chewable, swallo, pasteries, cakes, smoothies',
      img: 'assets/food.png',
      url: '/services/food'
    },
    {
      id: 4,
      name: 'Sports',
      description: 'Range of sport activities, football, volleyball, netball',
      img: 'assets/Sport.png',
      url: '/services/sports'
    }
  ];

}
