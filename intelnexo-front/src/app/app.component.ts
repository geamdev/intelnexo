import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccountsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'intelnexo-front';
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.dialog.open(WelcomeComponent, {
      width: '250px',
    });
  }
}
