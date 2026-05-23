import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  private http = inject(HttpClient);
  private API_URL = 'http://localhost:3000/api/articulo';

  /**
   * Recupera todos los artículos publicados.
   */
  getArticulos(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL);
  }

  /**
   * Publica un nuevo artículo en la plataforma.
   */
  crearArticulo(articulo: any): Observable<any> {
    return this.http.post<any>(this.API_URL, articulo);
  }

  /**
   * Modifica el contenido o metadatos de un artículo específico.
   */
  actualizarArticulo(id: string, articulo: any): Observable<any> {
    // CORREGIDO: Cambiado 'times' por 'this'
    return this.http.put<any>(`${this.API_URL}/${id}`, articulo);
  }

  /**
   * Remueve un artículo por su identificador.
   */
  eliminarArticulo(id: string): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
}