import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar
import { WelcomeComponent } from '../welcome/welcome.component';
import { ClienteService } from '../../services/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paypal',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './paypal.component.html',
  styleUrl: './paypal.component.css',
  providers: [ClienteService],
})
export class PaypalComponent {
  monto: number;
  formMoney: number;

  constructor(
    @Optional() public dialogRef: MatDialogRef<WelcomeComponent>,
    private clienteService: ClienteService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar
  ) {
    this.monto = data ? data.monto : 0;
    this.formMoney = 0;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.formMoney = form.value.monto;
      const data = {
        user_id: this.data.user_id,
        cuenta_id: this.data.cuenta_id,
        monto: Number(this.formMoney),
      };

      this.clienteService.realizarPago(data).subscribe(
        (response) => {
          console.log('Pago exitoso:', response);
          this.showSnackBar(response.message);
          // call the service to update the data in the parent component
          this.clienteService.getClientes().subscribe((data) => {
            this.data.clientes = data;
          });
        },
        (error) => {
          console.error('Error al realizar el pago:', error.error);
          this.showSnackBar('Error al realizar el pago');
        }
      );

      this.dialogRef.close();
    }
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
