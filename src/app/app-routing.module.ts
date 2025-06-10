import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) 
  },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) 
  },
  { 
    path: 'reserva', 
    loadChildren: () => import('./reserva/reserva.module').then(m => m.ReservaPageModule) 
  },
  { 
    path: 'mis-reservas', 
    loadChildren: () => import('./mis-reservas/mis-reservas.module').then(m => m.MisReservasPageModule) 
  },
  { 
    path: 'mi-perfil', 
    loadChildren: () => import('./mi-perfil/mi-perfil.module').then(m => m.MiPerfilPageModule) 
  },
  // Redirección alternativa por si hay error
  { 
    path: '**', 
    redirectTo: 'login' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { 
      preloadingStrategy: PreloadAllModules,
      enableTracing: false // Cambia a true para debug en consola
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }