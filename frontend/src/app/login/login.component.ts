import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
 standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
  userType: 'customer' | 'business' = 'customer';
  showPassword = false;
  isLoading = false;

  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

   onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     this.isLoading = true;
  //     this.errorMessage = '';

  //     const { email, password, rememberMe } = this.loginForm.value;

  //     // Simulate API call
  //     setTimeout(() => {
  //       // Replace this with your actual authentication service
  //       console.log('Login attempt:', { email, userType: this.userType, rememberMe });
        
  //       // Simulated success
  //       if (email && password) {
  //         alert(`✅ Login successful as ${this.userType}!\nEmail: ${email}`);
  //         // Navigate based on user type
  //         if (this.userType === 'business') {
  //           this.router.navigate(['/business/dashboard']);
  //         } else {
  //           this.router.navigate(['/customer/dashboard']);
  //         }
  //       } else {
  //         this.errorMessage = 'Invalid credentials. Please try again.';
  //       }
        
  //       this.isLoading = false;
  //     }, 1500);
  //   } else {
  //     this.markFormGroupTouched(this.loginForm);
  //   }
   }

  onSocialLogin(provider: string): void {
    console.log(`Social login with ${provider}`);
    alert(`${provider} login implementation coming soon!`);
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
