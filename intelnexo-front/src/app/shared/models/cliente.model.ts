interface Account {
  id: number;
  saldo: number;
}

export interface Cliente {
  cuentas: Account[];
  email: string;
  id: number;
  username: string;
}

export interface ClienteResponse {
  user_id: number;
  cuenta_id: number;
  monto: number;
}
