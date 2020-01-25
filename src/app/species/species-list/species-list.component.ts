import { Component, OnInit } from '@angular/core';
import { Species } from '../species';
import { SpeciesService } from '../species.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {

  species: Species[];
  ​
    //Injeção de dependência do serviço no componente
    constructor(private service : SpeciesService) { }
  ​
    ngOnInit() {
      this.getAll();
    }
  ​
    //Método que vai assinar (subscribe) a consulta
    //quando houver resultado os dados serao armazenas num array
    getAll(){
      this.service.get().subscribe(
        resultado => this.species = resultado.results,
        error => /* Tratamos erros aqui :) */console.log(error));
    }
  ​
  }