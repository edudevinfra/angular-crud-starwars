import { Component, OnInit } from '@angular/core';
import { Vehicles } from '../vehicles';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

  vehicles: Vehicles[];
  ​
    //Injeção de dependência do serviço no componente
    constructor(private service : VehiclesService) { }
  ​
    ngOnInit() {
      this.getAll();
    }
  ​
    //Método que vai assinar (subscribe) a consulta
    //quando houver resultado os dados serao armazenas num array
    getAll(){
      this.service.get().subscribe(
        resultado => this.vehicles = resultado.results,
        error => /* Tratamos erros aqui :) */console.log(error));
    }
  ​
  }