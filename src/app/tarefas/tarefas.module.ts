import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefaComponent } from './components/listagem/listar-tarefa.component';



@NgModule({
  declarations: [
    ListarTarefaComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
