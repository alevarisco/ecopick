import { Routes } from '@angular/router';
import { NotFoundComponent } from '../core/errors/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'products',
    loadChildren: () => import('../products/products.module').then(m => m.ProductsModule)
  },
  /* ERROR PAGES */
  {
    path: '404',
    component: NotFoundComponent
  },
];
