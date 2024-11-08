import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo2',
  templateUrl: './conteudo2.component.html',
  styleUrls: ['./conteudo2.component.css']
})
export class Conteudo2Component implements OnInit {
  @Input()
  fotoCapa:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
