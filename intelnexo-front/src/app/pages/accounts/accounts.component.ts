import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../../shared/services/api.service';
import { WelcomeComponent } from '../../shared/components/welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../shared/services/cliente.service';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [WelcomeComponent, CommonModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
})
export class AccountsComponent implements OnInit {
  clientes: any[] = [];

  // constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    // this.apiService.getClientes().subscribe((data) => {
    //   this.clientes = data;
    // });

    this.clientes = [
      {
        cuentas: [
          { id: 70, saldo: 1000.0 },
          { id: 71, saldo: 1000.0 },
          { id: 72, saldo: 1000.0 },
        ],
        email: 'user0@example.com',
        id: 105,
        username: 'user0',
      },
      {
        cuentas: [
          { id: 73, saldo: 1000.0 },
          { id: 74, saldo: 1000.0 },
          { id: 75, saldo: 1000.0 },
        ],
        email: 'user1@example.com',
        id: 106,
        username: 'user1',
      },
      {
        cuentas: [
          { id: 76, saldo: 1000.0 },
          { id: 77, saldo: 1000.0 },
          { id: 78, saldo: 1000.0 },
        ],
        email: 'user2@example.com',
        id: 107,
        username: 'user2',
      },
      {
        cuentas: [
          { id: 79, saldo: 1000.0 },
          { id: 80, saldo: 1000.0 },
          { id: 81, saldo: 1000.0 },
        ],
        email: 'user3@example.com',
        id: 108,
        username: 'user3',
      },
      {
        cuentas: [
          { id: 82, saldo: 1000.0 },
          { id: 83, saldo: 1000.0 },
          { id: 84, saldo: 1000.0 },
        ],
        email: 'user4@example.com',
        id: 109,
        username: 'user4',
      },
    ];
  }

  // realizarPago(clienteId: number, cuentaId: number, monto: number): void {
  //   // Lógica para realizar el pago, mostrar popup de pago, etc.
  //   this.clienteService.realizarPago(clienteId, cuentaId, monto).subscribe(
  //     (response) => {
  //       console.log('Pago exitoso:', response);
  //       // Aquí podrías realizar alguna acción adicional después del pago exitoso
  //     },
  //     (error) => {
  //       console.error('Error al realizar el pago:', error);
  //       // Aquí podrías manejar el error y mostrar un mensaje al usuario
  //     }
  //   );
  // }
}
