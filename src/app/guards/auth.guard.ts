import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // Verificamos si existe el token guardado en el navegador
  const token = localStorage.getItem('x-auth-token');

  if (token) {
    return true; // El usuario tiene pase libre
  } else {
    // Si no está logueado, lo redirigimos de inmediato al Login
    router.navigate(['/login']);
    return false;
  }
};