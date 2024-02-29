import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente, ClienteResponse } from '../models/cliente.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private baseUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseUrl}/users/`, {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:4000',
        'Access-Control-Allow-Credentials': 'true',
      },
    });
  }

  realizarPago(cliente: ClienteResponse): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/pay`, cliente);
  }
}
