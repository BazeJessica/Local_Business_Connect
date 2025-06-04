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
      img: 'assets/house-vector.png'
    },
    {
      id: 2,
      name: 'Beauty & Wellness',
      description: 'Braiding, Massage, Manicure',
      img: 'assets/wellnes.png'
    },
  
    {
      id: 3,
      name: 'Fitness & Health',
      description: 'Coaching, Equipment rental, Fitness sessions',
      img: 'assets/fitness.png'
    },
    {
      id: 4,
      name: 'Books',
      description: 'Reading clubs, Book rentals, Writing help',
      img: 'assets/book.png'
    }
  ];
name: any;
  

}
