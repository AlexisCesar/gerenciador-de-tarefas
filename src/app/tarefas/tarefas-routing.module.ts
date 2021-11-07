import { Routes } from "@angular/router";
import { ListarTarefaComponent } from ".";
import { CadastrarTarefaComponent } from "./components/cadastro";

export const TarefasRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listagem'
    },
    {
        path: 'tarefas/listagem',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastro',
        component: CadastrarTarefaComponent
    }
];