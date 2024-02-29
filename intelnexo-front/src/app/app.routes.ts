import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user/:id', component: AccountsComponent },
  { path: '', component: UsersComponent },
];
