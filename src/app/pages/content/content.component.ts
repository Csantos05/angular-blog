import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  fotoCapa:string = "https://pmspa.rj.gov.br/wp-content/uploads/2023/03/Foto-5-Praia-do-Sudoeste-3-600x338.jpg"
  contentTitle:string = "Escreva aqui"
  contenteDescription:string = "TextoTexto..."
 

  constructor( ) { }

  ngOnInit(): void {
    
  }

}
