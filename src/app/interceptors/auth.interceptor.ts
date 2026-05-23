import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Interceptor de seguridad para Ensigna Gifty.
 * Atrapa de forma transparente cada petición HTTP saliente e inyecta el token JWT.
 */
export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  
  // Recuperamos el token almacenado de forma segura en el navegador
  const token = localStorage.getItem('x-auth-token');

  // Si la usuaria ya inició sesión y hay un token disponible
  if (token) {
    // Clonamos la petición original e inyectamos la cabecera que espera tu authMiddleware
    const clonarPeticion = req.clone({
      setHeaders: {
        'x-auth-token': token
      }
    });
    // Enviamos la petición modificada con el token hacia la API
    return next(clonarPeticion);
  }

  // Si no hay token (por ejemplo, al registrarse o iniciar sesión), la petición sigue normal
  return next(req);
};
