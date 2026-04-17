import { Component, inject, signal } from '@angular/core';
import { SpaceNewsServiceStatic } from '../../../services/space-news-service-static';
import { ISpaceNewsArticle, ISpaceNewsResponse } from '../../../model/ISpaceNews';
import { SpaceNewsService } from '../../../services/space-news-service';

@Component({
  selector: 'app-space-news',
  imports: [],
  templateUrl: './space-news.html',
  styleUrl: './space-news.scss',
})
export class SpaceNews {
  
  newsService = inject(SpaceNewsService);
  /*
  newsServiceStatic = inject(SpaceNewsServiceStatic);
  news: ISpaceNewsArticle[] = this.newsServiceStatic.getAll();
  */
  news = signal<ISpaceNewsArticle[]>([]);
  
  constructor(){
    this.newsService.getSpaceNews$().subscribe(
      {
        next : (response : ISpaceNewsResponse) =>{
          console.log(response);
          this.news.set([...response.results]);
        }
      }
    );
    console.log("Dans le constructeur de SpaceNews");
  }
}
