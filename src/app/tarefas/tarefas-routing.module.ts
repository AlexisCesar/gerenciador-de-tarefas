import { Routes } from "@angular/router";
import { ListarTarefaComponent } from ".";

export const TarefasRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listagem'
    },
    {
        path: 'tarefas/listagem',
        component: ListarTarefaComponent
    }
];