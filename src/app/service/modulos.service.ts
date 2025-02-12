import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModulosService {
  
  private apiUrl = 'http://localhost:8080/api/v1/modulos'

  constructor(private http: HttpClient) {
   }

  getModulos(): Observable<any>{
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error sending data:', error);
        throw error; // Rethrow error for handling
      })
    );
  }

  guardarModulo(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, data, { headers }).pipe(
      catchError(error => {
        console.error('Error sending data:', error);
        throw error; // Rethrow error for handling
      })
    );
  }

  actualizarModulo(id:number, data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(`${this.apiUrl}/${id}`, data, { headers }).pipe(
      catchError(error => {
        console.error('Error sending data:', error);
        throw error; // Rethrow error for handling
      })
    );
  }

  eliminarModulo(id:number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers }).pipe(
      catchError(error => {
        console.error('Error sending data:', error);
        throw error; // Rethrow error for handling
      })
    );
  }
}
