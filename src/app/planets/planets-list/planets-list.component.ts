import { Component, OnInit } from '@angular/core';
import { Planets } from '../planets';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  planets: Planets[];
​
  //Injeção de dependência do serviço no componente
  constructor(private service : PlanetsService) { }
​
  ngOnInit() {
    this.getAll();
  }
​
  //Método que vai assinar (subscribe) a consulta
  //quando houver resultado os dados serao armazenas num array
  getAll(){
    this.service.get().subscribe(
      resultado => this.planets = resultado.results,
      error => /* Tratamos erros aqui :) */console.log(error));
  }
​
}