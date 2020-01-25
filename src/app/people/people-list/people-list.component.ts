import { Component, OnInit } from '@angular/core';
import { People } from '../people';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people: People[];
​
  //Injeção de dependência do serviço no componente
  constructor(private service : PeopleService) { }
​
  ngOnInit() {
    this.getAll();
  }
​
  //Método que vai assinar (subscribe) a consulta
  //quando houver resultado os dados serao armazenas num array
  getAll(){
    this.service.get().subscribe(
      resultado => this.people = resultado.results,
      error => /* Tratamos erros aqui :) */console.log(error));
  }
​
}