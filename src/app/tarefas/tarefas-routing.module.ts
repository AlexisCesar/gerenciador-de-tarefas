import { Routes } from "@angular/router";
import { EditarTarefaComponent } from "./components/editar";
import { ListarTarefaComponent } from "./components/listagem";
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
    },
    {
        path: 'tarefas/edicao/:id',
        component: EditarTarefaComponent
    }
];