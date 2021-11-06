import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefasRoutes } from './tarefas';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tarefas/listagem',
    pathMatch: 'full'
  },
  ...TarefasRoutes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
