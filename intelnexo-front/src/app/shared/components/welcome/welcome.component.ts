import { Component, Optional } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  constructor(@Optional() public dialogRef: MatDialogRef<WelcomeComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
