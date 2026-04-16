import { Component, inject } from '@angular/core';
import { SpaceNewsServiceStatic } from '../../../services/space-news-service-static';
import { ISpaceNewsArticle } from '../../../model/ISpaceNews';

@Component({
  selector: 'app-space-news',
  imports: [],
  templateUrl: './space-news.html',
  styleUrl: './space-news.scss',
})
export class SpaceNews {
  
  newsServiceStatic = inject(SpaceNewsServiceStatic);

  news: ISpaceNewsArticle[] = this.newsServiceStatic.getAll();

}
