import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuBarComponent } from 'src/app/components/menu-bar/menu-bar.component';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements MenuBarComponent, OnInit {
  fotoCapa:string = "https://odia.ig.com.br/_midias/jpg/2020/09/23/1140x632/1_orla_sao_pedro-19751133.jpg"
  contentTitle:string = "Praia de São Pedro"  
  contentDescription:string = "A praia mais central da cidade é um convite ao lazer, mas não estamos falando apenas do calçadão da orla, que diariamente é o cenário de caminhadas e pedaladas de moradores e visitantes. O píer da Praia de São Pedro é o ponto perfeito para você apreciar o belíssimo pôr do sol de São Pedro da Aldeia. À noite, sobretudo no verão, o local é o point onde os jovens e as famílias se encontram."


  fotoCapa2:string = "https://lh5.googleusercontent.com/p/AF1QipNWDjS3hCMZ1LVv-IHZPmki9tKVL_bvq1LFqcIy=s1600"
  contentTitle2:string = "Praia da Pitória"  
  contentDescription2:string = "Próxima ao centro da cidade, a Pitória possui uma charmosa orla, ideal para você e sua família. Se chegar cedo, uma enorme figueira proporciona sombra para o dia inteiro. No canto esquerdo da praia, redes e barcos ancorados apontam que o local é um reduto da pesca artesanal aldeense. O cenário da Praia da Pitória, com os barcos de pesca, areias claras e águas cristalinas, rende lindas fotos."


  fotoCapa3:string = "https://pmspa.rj.gov.br/wp-content/uploads/2023/03/Foto-4-Praia-do-Sol-600x338.jpg"
  contentTitle3:string = "Praia do Sol"  
  contentDescription3:string = "Bastante frequentada, a Praia do Sol é a nossa praia mais arborizada. Dispõe de sombra e quiosques, você pode escolher quiosque um para aproveitar deliciosos pratos de fruto do mar com aquele som ao vivo."

  fotoCapa4:string = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/3b/ed/04/photo1jpg.jpg?w=1200&h=-1&s=1"
  contentTitle4:string = "Praia do Sudoeste"  
  contentDescription4:string = "Sol, sombra, pedalinhos e areias brancas, a Praia do Sudoeste é a nossa praia mais frequentada. Ao longo da sua orla, bastante extensa, temos pousadas, restaurantes e quiosques, onde você pode desfrutar aquele pastel de camarão."

  fotoCapa5:string = "https://lagosecotur.com.br/wp-content/uploads/elementor/thumbs/F.-Roberto-M-1-qh6xt6z1ddun4tbw7r4r2sqqhm72w6tkgxvr3pyu0g.jpg"
  contentTitle5:string = "Praia dos Cardeiros"  
  contentDescription5:string = "Situada em um dos limites do município de São Pedro da Aldeia, está a Praia Linda. Em sua extensa faixa de areia, ela oferta seus visitantes com diversos quiosques, além de opções para hospedagem."

 
  fotoCapa6:string = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/4c/6d/59/praia-balneario-sao-pedro.jpg?w=1200&h=-1&s=1"
  contentTitle6:string = "Praia do Balneário"  
  contentDescription6:string = "Muito arborizada e com extensa faixa de areia, a Praia do Balneário conta com quiosques e pousadas, sendo um excelente local para o lazer familiar."
  
  fotoCapa7:string = "https://www.nasestradasdoplaneta.com.br/wp-content/uploads/2022/03/Ilha-do-Boi-em-Sao-Pedro-da-Aldeia.jpg"
  contentTitle7:string = "Praia da Salina"  
  contentDescription7:string = "Mais reservada, a Praia da Salina guarda um pequeno paraíso e ainda é desconhecida por muitos. É ali que fica a Ilha o Boi, cujo cenário enche os olhos de quem a avista."
  
  fotoCapa8:string = "https://www.passeios.org/wp-content/uploads/2021/07/Praia-Linda.jpg"
  contentTitle8:string = "Praia Linda"  
  contentDescription8:string = "Situada em um dos limites do município de São Pedro da Aldeia, está a Praia Linda. Em sua extensa faixa de areia, ela oferta seus visitantes com diversos quiosques, além de opções para hospedagem."
 
  fotoCapa9:string = "https://fontecerta.com/wp-content/uploads/2020/11/IMG-20201106-WA0001.jpg"
  contentTitle9:string = "Praia da Tereza"  
  contentDescription9:string = "Na outra ponta da Orla Atlântica, e no final do calçadão que inicia no centro da cidade, está a Praia da Tereza, mais reservada. Possui uma linda pracinha, além de um píer para você não perder aquele pôr do sol instagramável."
 

  constructor(
    private route:ActivatedRoute
   ) { }
  

  ngOnInit(): void {   
    
  }

}
