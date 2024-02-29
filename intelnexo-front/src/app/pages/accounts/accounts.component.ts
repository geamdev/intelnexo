import { Component, OnInit } from '@angular/core';
import { WelcomeComponent } from '../../shared/components/welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../shared/services/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PaypalComponent } from '../../shared/components/paypal/paypal.component';
@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [WelcomeComponent, CommonModule, HttpClientModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
  providers: [ClienteService],
})
export class AccountsComponent implements OnInit {
  clientes: any[] = [];

  constructor(
    private clienteService: ClienteService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void {
    this.clienteService.getClientes().subscribe((data) => {
      this.clientes = data;
    });
  }

  realizarPago(clienteId: number, cuentaId: number, monto: number): void {
    const data = {
      user_id: clienteId,
      cuenta_id: cuentaId,
      monto: monto,
      clientes: this.clientes,
    };
    const dialogRef = this.dialog.open(PaypalComponent, {
      data: data,
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getClientes();
    });
  }
}
