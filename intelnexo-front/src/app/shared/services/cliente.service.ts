import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/clientes`);
  }

  // realizar el pago
  realizarPago(cliente: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/clientes`, cliente);
  }
}
