import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private API_URL = 'http://localhost:3000/api/auth';

  /**
   * Envia las credenciales de ingreso y almacena el token si la respuesta es correcta.
   */
  login(credenciales: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/login`, credenciales).pipe(
      tap(res => {
        if (res && res.token) {
          localStorage.setItem('x-auth-token', res.token);
        }
      })
    );
  }

  /**
   * Registra un nuevo usuario en la plataforma.
   */
  registrar(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/registrar`, usuario);
  }

  /**
   * Elimina el token del localStorage para cerrar la sesión.
   */
  logout(): void {
    localStorage.removeItem('x-auth-token');
  }
}