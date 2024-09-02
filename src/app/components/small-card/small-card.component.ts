import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  fotoCover:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9iIlngAstzHI4l1VRS-HodjRF7VAAqCW0Fef4ltFdzSzXH1-oNmhmtS4Ztz0gc5xnpw&usqp=CAU"
  @Input()
  cardTitle:string = "Points"

  

  constructor() { }

  ngOnInit(): void {
  }

}
