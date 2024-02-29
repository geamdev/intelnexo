import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { MatDialog } from '@angular/material/dialog';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AccountsComponent,
    DashboardComponent,
    UsersComponent,
    WelcomeComponent,
    CommonModule,
    RouterLink,
  ],
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
