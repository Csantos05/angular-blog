import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-video',
  templateUrl: './video.card.component.html',
  styleUrls: ['./video.card.component.css']
})
export class VideoComponent implements OnInit { 
  videoCard:string =""
  videoTitle:string = ""

  

  constructor() { }

  ngOnInit(): void {
  }

}
