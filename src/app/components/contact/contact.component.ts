import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'] 
})
export class ContactComponent { 
  myForm: FormGroup;
selectedCategory: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({ 
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone:['',Validators.required],
      subject: ['',Validators.required]
    });
  }



  onSubmit(): void {
    if (this.myForm.valid) {
      console.log('Form Submitted', this.myForm.value);
    }
  }
  Categories = [
    { value: 'Local Business Owner',viewValue: 'Local Business Owner'},
    { value: 'Customer',viewValue: 'Customer'},
    { value: 'Potential Partner',viewValue: 'Potential Partner'},
    { value: 'Other',viewValue: 'Other'}
  ];
}
