import { Component, OnInit } from '@angular/core';
import { Starships } from '../starships';
import { StarshipsService } from '../starships.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {

  starships: Starships[];
  ​
    //Injeção de dependência do serviço no componente
    constructor(private service : StarshipsService) { }
  ​
    ngOnInit() {
      this.getAll();
    }
  ​
    //Método que vai assinar (subscribe) a consulta
    //quando houver resultado os dados serao armazenas num array
    getAll(){
      this.service.get().subscribe(
        resultado => this.starships = resultado.results,
        error => /* Tratamos erros aqui :) */console.log(error));
    }
  ​
  }