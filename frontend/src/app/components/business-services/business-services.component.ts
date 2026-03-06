import { Component, inject, OnInit } from '@angular/core';
import { BusinessServiceService } from '../../services/business-service.service';
import { businessServiceType } from '../../../types/types';

@Component({
  selector: 'app-business-services',
  standalone: false,
  templateUrl: './business-services.component.html',
  styleUrl: './business-services.component.scss'
})
export class BusinessServicesComponent implements OnInit {
private businessService = inject(BusinessServiceService);
businesses: businessServiceType[] =[];

  Categories = [
    { viewValue: 'Home Service'},
    { viewValue: 'Beauty & Wellness'},
    { viewValue: 'Fitness & Health'},
    { viewValue: 'Books'},
    { viewValue: 'Food'},
    { viewValue: 'Sports'},
    { viewValue: 'Transport'} 
  ];
ngOnInit(): void{
 this.businesses = this.businessService.businesses;
}

filterByCategory(category: string): void {
  if (category) {
    this.businesses = this.businessService.getBusinessesByCategory(category);
  } else {
    this.businesses = this.businessService.businesses;
  }
}
}
