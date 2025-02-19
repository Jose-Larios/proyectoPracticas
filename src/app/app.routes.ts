import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () => import('./main/main.page').then((m) => m.MainPage),
  },
  {
    path: 'carrito-compras',
    loadComponent: () =>
      import('./carrito-compras/carrito-compras.page').then(
        (m) => m.CarritoComprasPage
      ),
  },
  {
    path: 'mis-compras',
    loadComponent: () =>
      import('./mis-compras/mis-compras.page').then((m) => m.MisComprasPage),
  },
];
