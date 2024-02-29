import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../shared/services/cliente.service';
import { WelcomeComponent } from '../../shared/components/welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AccountsComponent } from '../accounts/accounts.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    WelcomeComponent,
    CommonModule,
    HttpClientModule,
    RouterLink,
    RouterOutlet,
    AccountsComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  providers: [ClienteService],
})
export class UsersComponent implements OnInit {
  clientes: any[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void {
    this.clienteService.getClientes().subscribe((data) => {
      this.clientes = data;
    });
  }
}
