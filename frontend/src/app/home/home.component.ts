import { Component} from '@angular/core';
import { categoryType } from '../../types/types';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  allCategories: categoryType[]=[];
  filteredCategories: categoryType[] = [];


  onCategoriesLoaded(categories: categoryType[]) {
    this.allCategories = categories;
    this.filteredCategories = categories;

  }

  filteredCategory(event: Event) {
    const input = event.target;
    let searchIterm = '';
    if (input instanceof HTMLInputElement) {
      searchIterm = input.value.toLowerCase();
    }
    this.filteredCategories = this.allCategories.filter(cat =>
      cat.name.toLowerCase().includes(searchIterm)
    );
  }
  isAuthenticated = false; // This should be set based on your authentication logic
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
