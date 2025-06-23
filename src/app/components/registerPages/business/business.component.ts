import { Component } from '@angular/core';

@Component({
  selector: 'app-business',
  standalone: false,
  templateUrl: './business.component.html',
  styleUrl: './business.component.scss',
})
export class BusinessComponent {
  currentstep = 1;
  steps = [
    { label: 'Business Details' },
    { label: 'Services' },
    { label: 'Schedule' },
    { label: 'Media' },
    { label: 'Availability' },
  ];
  goToStep(step: number) {
    this.currentstep = step;
  }
  previousStep(): void {
    if(this.currentstep > 1){
      this.currentstep--;
    }
  }
  nextStep(): void{
    if(this.currentstep < this.steps.length){
      this.currentstep++;
    }
  }
}
