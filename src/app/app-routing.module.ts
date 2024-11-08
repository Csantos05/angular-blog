import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { VideoComponent } from './pages/content/video-card/video.card.component';
import { ConteudoComponent } from './pages/conteudo/conteudo.component';
import { Conteudo2Component } from './pages/conteudo2/conteudo2.component';
import { MainFooterComponent } from "./components/main-footer/main-footer.component"

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'content',
    component: ContentComponent

  },
  {
    path: 'conteudo',
    component: ConteudoComponent

  },
  {
    path: 'conteudo2',
    component: Conteudo2Component

  },
  {
    path: 'content',
    component: VideoComponent
  },
  {
    path: 'content',
    component: MainFooterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
