import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  constructor(private dialogRef: MatDialogRef<DialogComponent>) {}
  onClose() {
    this.dialogRef.close();
  }
}