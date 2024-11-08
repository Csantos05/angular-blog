import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit { 
  @Input() 
  fotoCapa:string = ""  
  @Input() 
  cardTitle:string = "" 
  @Input() 
  cardDescription:string = ""
 
  videoCard:string =""
  videoTitle:string = ""
 
 

  constructor() { }

  ngOnInit(): void {
  }

}
 