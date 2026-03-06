import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { categoryType } from '../../../../types/types';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  private categoryService = new CategoryService();

  @Output() categoryisLoaded = new EventEmitter<categoryType[]>();
  @Input() filteredCategories: categoryType[] = [];

  ngOnInit(): void {
    const allCategories = this.categoryService.getCategories();
    this.categoryisLoaded.emit(allCategories);
  }
}