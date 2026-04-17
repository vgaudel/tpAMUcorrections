import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISpaceNewsResponse } from '../model/ISpaceNews';

@Injectable({
  providedIn: 'root',
})
export class SpaceNewsService {

  httpClient = inject(HttpClient);

  getSpaceNews$() : Observable<ISpaceNewsResponse> {
    return this.httpClient.get<ISpaceNewsResponse>("https://api.spaceflightnewsapi.net/v4/articles/");
  }

}
