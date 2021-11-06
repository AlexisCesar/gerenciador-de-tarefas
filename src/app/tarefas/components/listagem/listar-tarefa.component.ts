import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from '../../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
    this.tarefas.push(new Tarefa(1, "Tarefa A", false));
    this.tarefas.push(new Tarefa(2, "Tarefa B", true));
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

}
