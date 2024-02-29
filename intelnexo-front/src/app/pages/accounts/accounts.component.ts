import { Component, OnInit } from '@angular/core';
import { WelcomeComponent } from '../../shared/components/welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../shared/services/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PaypalComponent } from '../../shared/components/paypal/paypal.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [WelcomeComponent, CommonModule, HttpClientModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
  providers: [ClienteService],
})
export class AccountsComponent implements OnInit {
  cuentas: any[] = [];
  id: number = 0;

  constructor(
    private clienteService: ClienteService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const clienteId = Number(params.get('id'));
      this.id = clienteId;
      this.getCuentas();
    });
  }

  getCuentas(): void {
    this.clienteService.getCuentasbyID(this.id).subscribe((data) => {
      this.cuentas = data;
    });
  }

  realizarPago(clienteId: number, cuentaId: number, monto: number): void {
    const data = {
      user_id: clienteId,
      cuenta_id: cuentaId,
      monto: monto,
      clientes: this.cuentas,
    };
    const dialogRef = this.dialog.open(PaypalComponent, {
      data: data,
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getCuentas();
    });
  }
}
