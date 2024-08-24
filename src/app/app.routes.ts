import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./streaming/pages/layout/layout.component').then(
        (m) => m.LayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./streaming/pages/principal/principal.component').then(
            (m) => m.PrincipalComponent
          ),
      },
      {
        path: 'pantallas',
        loadComponent: () =>
          import('./streaming/pages/pantallas/pantallas.component').then(
            (m) => m.PantallasComponent
          ),
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
