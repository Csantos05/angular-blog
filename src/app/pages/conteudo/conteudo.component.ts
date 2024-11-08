import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {
  @Input()
  cardTitle:string = ""
  
  constructor() { }

  ngOnInit(): void {
  }

}