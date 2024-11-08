import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { VideoComponent } from './pages/content/video-card/video.card.component';
import { ConteudoComponent } from './pages/conteudo/conteudo.component';
import { Conteudo2Component } from './pages/conteudo2/conteudo2.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,   
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,  
    ContentComponent,
    VideoComponent,
    ConteudoComponent,
    Conteudo2Component,
    MainFooterComponent,
   
   
         
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
