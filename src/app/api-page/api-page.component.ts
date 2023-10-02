import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-api-page',
  templateUrl: './api-page.component.html',
  styleUrls: ['./api-page.component.css']
})
export class ApiPageComponent implements OnInit {

  data: Array<any> = new Array();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.listarCharacters();
  }

  listarCharacters() {
    this.dataService.listarCharacters().subscribe(character => {
      this.data = character;
    }, err => {
      console.log("Erro ao listar Characters", err)
    })
  }
}

