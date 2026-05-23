import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GadgetService {
  private http = inject(HttpClient);
  private API_URL = 'http://localhost:3000/api/gadgets'; // Apunta a tus rutas del backend

  /**
   * Trae la lista completa de gadgets tecnológicos desde MongoDB.
   */
  getGadgets(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL);
  }

  /**
   * Guarda un nuevo dispositivo tecnológico de bienestar.
   */
  crearGadget(gadget: any): Observable<any> {
    return this.http.post<any>(this.API_URL, gadget);
  }

  /**
   * Actualiza las propiedades de un gadget por su ID único.
   */
  actualizarGadget(id: string, gadget: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${id}`, gadget);
  }

  /**
   * Elimina permanentemente un gadget del catálogo.
   */
  eliminarGadget(id: string): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
}