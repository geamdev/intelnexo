import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../shared/services/cliente.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardComponent, CommonModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [ClienteService],
})
export class DashboardComponent implements OnInit {
  users: any[] = [];

  ngOnInit(): void {
    this.users = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    ];
  }
}
