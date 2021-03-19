import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'productos',
        loadChildren: () => import('../productos/productos.module').then( m => m.ProductosPageModule)
      },
      {
        path: 'caducacion',
        loadChildren: () => import('../caducacion/caducacion.module').then( m => m.CaducacionPageModule)
      },
      {
        path: 'nuevo',
        loadChildren: () => import('../neuvo/neuvo.module').then( m => m.NeuvoPageModule)
      },
      {
        path: 'tabs',
        loadChildren: () => import('../tabs/tabs.module').then( m => m.TabsPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/nuevo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
