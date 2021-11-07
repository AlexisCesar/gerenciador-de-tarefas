import { Injectable } from '@angular/core';
import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(novaTarefa:Tarefa): void {
    let tarefas:Tarefa[] = this.listarTodos();
    novaTarefa.id = new Date().getTime();
    tarefas.push(novaTarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id:number): Tarefa {
    const tarefas = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizar(tarefa:Tarefa): void {
    let tarefas:Tarefa[] = this.listarTodos();

    for(let i = 0; i < tarefas.length; i++) {
      if(tarefas[i].id === tarefa.id) {
        tarefas[i] = tarefa;
        break;
      }
    }
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id:number): void {
    let tarefas:Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id:number): void {
    let tarefas:Tarefa[] = this.listarTodos();

    for(let i = 0; i < tarefas.length; i++) {
      if(tarefas[i].id === id) {
        tarefas[i].concluida = !tarefas[i].concluida;
        break;
      }
    }
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}
