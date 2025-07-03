import { Component, ElementRef, ViewChild } from '@angular/core';

export interface FileUploadData {
  file: File;
  url: string;
  name: string;
  size: number;
  type: string;
  uploadProgress?: number;
  isUploaded?: boolean;
}
@Component({
  selector: 'app-media',
  standalone: false,
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent {

  @ViewChild('logoInput', { static: false }) logoInput!: ElementRef<HTMLInputElement>;
  @ViewChild('photosInput', { static: false }) photosInput!: ElementRef<HTMLInputElement>;

  // File storage properties
  logoFile: FileUploadData | null = null;
  businessPhotos: FileUploadData[] = [];
  
  // Upload state properties
  isLogoUploading = false;
  isPhotosUploading = false;
  uploadErrors: string[] = [];
  
  // Configuration
  maxFileSize = 10 * 1024 * 1024; // 10MB
  maxPhotos = 10;
  allowedImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];

  constructor() {}

  /**
   * Handles logo upload area click
   */
  onLogoAreaClick(): void {
    this.logoInput.nativeElement.click();
  }

  /**
   * Handles business photos upload area click
   */
  onPhotosAreaClick(): void {
    this.photosInput.nativeElement.click();
  }

  /**
   * Handles logo file selection
   */
  onLogoFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.handleLogoUpload(file);
    }
  }

  /**
   * Handles business photos file selection
   */
  onPhotosFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const files = Array.from(input.files);
      this.handlePhotosUpload(files);
    }
  }

  /**
   * Handles logo drag over event
   */
  onLogoDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.addDragOverClass(event.currentTarget as HTMLElement);
  }

  /**
   * Handles logo drag leave event
   */
  onLogoDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.removeDragOverClass(event.currentTarget as HTMLElement);
  }

  /**
   * Handles logo drop event
   */
  onLogoDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.removeDragOverClass(event.currentTarget as HTMLElement);
    
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleLogoUpload(files[0]);
    }
  }

  /**
   * Handles photos drag over event
   */
  onPhotosDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.addDragOverClass(event.currentTarget as HTMLElement);
  }

  /**
   * Handles photos drag leave event
   */
  onPhotosDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.removeDragOverClass(event.currentTarget as HTMLElement);
  }

  /**
   * Handles photos drop event
   */
  onPhotosDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.removeDragOverClass(event.currentTarget as HTMLElement);
    
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files);
      this.handlePhotosUpload(fileArray);
    }
  }

  /**
   * Handles logo file upload
   */
  private handleLogoUpload(file: File): void {
    // Validate file
    const validationResult = this.validateFile(file, true);
    if (!validationResult.isValid) {
      this.showError(validationResult.error!);
      return;
    }

    this.isLogoUploading = true;
    this.clearErrors();

    // Create file data object
    const fileData: FileUploadData = {
      file: file,
      url: '',
      name: file.name,
      size: file.size,
      type: file.type,
      uploadProgress: 0,
      isUploaded: false
    };

    // Generate preview URL
    const reader = new FileReader();
    reader.onload = (e) => {
      fileData.url = e.target?.result as string;
      this.logoFile = fileData;
      this.updateLogoUploadUI();
    };
    reader.readAsDataURL(file);

    // Simulate upload progress (replace with actual upload logic)
    this.simulateUploadProgress(fileData, true);
  }

  /**
   * Handles business photos upload
   */
  private handlePhotosUpload(files: File[]): void {
    // Check if adding these files would exceed the limit
    if (this.businessPhotos.length + files.length > this.maxPhotos) {
      this.showError(`Maximum ${this.maxPhotos} photos allowed. Currently have ${this.businessPhotos.length} photos.`);
      return;
    }

    this.isPhotosUploading = true;
    this.clearErrors();

    const validFiles: File[] = [];
    
    // Validate each file
    files.forEach(file => {
      const validationResult = this.validateFile(file, false);
      if (validationResult.isValid) {
        validFiles.push(file);
      } else {
        this.showError(`${file.name}: ${validationResult.error}`);
      }
    });

    if (validFiles.length === 0) {
      this.isPhotosUploading = false;
      return;
    }

    // Process valid files
    validFiles.forEach(file => {
      const fileData: FileUploadData = {
        file: file,
        url: '',
        name: file.name,
        size: file.size,
        type: file.type,
        uploadProgress: 0,
        isUploaded: false
      };

      // Generate preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        fileData.url = e.target?.result as string;
        this.businessPhotos.push(fileData);
        this.updatePhotosUploadUI();
      };
      reader.readAsDataURL(file);

      // Simulate upload progress (replace with actual upload logic)
      this.simulateUploadProgress(fileData, false);
    });
  }

  /**
   * Validates uploaded file
   */
  private validateFile(file: File, isLogo: boolean): { isValid: boolean; error?: string } {
    // Check file type
    if (!this.allowedImageTypes.includes(file.type)) {
      return { 
        isValid: false, 
        error: `Invalid file type. Allowed types: ${this.allowedImageTypes.join(', ')}` 
      };
    }

    // Check file size
    if (file.size > this.maxFileSize) {
      return { 
        isValid: false, 
        error: `File size too large. Maximum size: ${this.formatFileSize(this.maxFileSize)}` 
      };
    }

    // Additional validation for logo
    if (isLogo) {
      // You can add specific logo validation here
      // For example, minimum dimensions, aspect ratio, etc.
    }

    return { isValid: true };
  }

  /**
   * Simulates upload progress (replace with actual upload service)
   */
  private simulateUploadProgress(fileData: FileUploadData, isLogo: boolean): void {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      fileData.uploadProgress = Math.min(progress, 100);
      
      if (fileData.uploadProgress >= 100) {
        clearInterval(interval);
        fileData.isUploaded = true;
        
        if (isLogo) {
          this.isLogoUploading = false;
        } else {
          // Check if all photos are uploaded
          const allUploaded = this.businessPhotos.every(photo => photo.isUploaded);
          if (allUploaded) {
            this.isPhotosUploading = false;
          }
        }
        
        this.onUploadComplete(fileData, isLogo);
      }
    }, 200);
  }

  /**
   * Handles upload completion
   */
  private onUploadComplete(fileData: FileUploadData, isLogo: boolean): void {
    console.log(`${isLogo ? 'Logo' : 'Photo'} uploaded successfully:`, fileData.name);
    
    // Here you would typically:
    // 1. Send the file to your backend API
    // 2. Update the fileData with the server response
    // 3. Handle any post-upload operations
    
    // Example API call structure:
    // this.uploadService.uploadFile(fileData.file, isLogo ? 'logo' : 'photo')
    //   .subscribe(response => {
    //     fileData.url = response.url; // Update with server URL
    //     // Handle success
    //   }, error => {
    //     // Handle upload error
    //     this.showError('Upload failed. Please try again.');
    //   });
  }

  /**
   * Removes a business photo
   */
  removePhoto(index: number): void {
    if (index >= 0 && index < this.businessPhotos.length) {
      this.businessPhotos.splice(index, 1);
      this.updatePhotosUploadUI();
    }
  }

  /**
   * Removes the logo
   */
  removeLogo(): void {
    this.logoFile = null;
    this.updateLogoUploadUI();
    
    // Reset file input
    if (this.logoInput) {
      this.logoInput.nativeElement.value = '';
    }
  }

  /**
   * Updates logo upload UI
   */
  private updateLogoUploadUI(): void {
    // This method can be used to trigger UI updates
    // Angular's change detection should handle most cases automatically
  }

  /**
   * Updates photos upload UI
   */
  private updatePhotosUploadUI(): void {
    // This method can be used to trigger UI updates
    // Angular's change detection should handle most cases automatically
  }

  /**
   * Adds drag over styling
   */
  private addDragOverClass(element: HTMLElement): void {
    element.classList.add('drag-over');
  }

  /**
   * Removes drag over styling
   */
  private removeDragOverClass(element: HTMLElement): void {
    element.classList.remove('drag-over');
  }

  /**
   * Shows error message
   */
  private showError(message: string): void {
    this.uploadErrors.push(message);
  }

  /**
   * Clears all error messages
   */
  private clearErrors(): void {
    this.uploadErrors = [];
  }

  /**
   * Formats file size for display
   */
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  /**
   * Gets upload progress percentage
   */
  getUploadProgress(fileData: FileUploadData): number {
    return fileData.uploadProgress || 0;
  }

  /**
   * Checks if file is uploading
   */
  isFileUploading(fileData: FileUploadData): boolean {
    return (fileData.uploadProgress || 0) > 0 && (fileData.uploadProgress || 0) < 100;
  }

  /**
   * Gets remaining photo slots
   */
  getRemainingPhotoSlots(): number {
    return this.maxPhotos - this.businessPhotos.length;
  }

  /**
   * Checks if more photos can be added
   */
  canAddMorePhotos(): boolean {
    return this.businessPhotos.length < this.maxPhotos;
  }

  /**
   * Gets all uploaded files data for form submission
   */
  getUploadedFilesData(): { logo: FileUploadData | null; photos: FileUploadData[] } {
    return {
      logo: this.logoFile,
      photos: this.businessPhotos.filter(photo => photo.isUploaded)
    };
  }

  /**
   * Validates if required files are uploaded
   */
  isMediaStepValid(): boolean {
    // You can customize this based on your requirements
    // For example, make logo required or require minimum number of photos
    return true; // Currently optional
  }
}
