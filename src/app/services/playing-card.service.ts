import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { IPlaycardUser } from '../shared/interfaces/playcard-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayingCardService {
  private urlDefault: string = "playing-card/";

  constructor(private httpService: HttpService) { }

  public setNewPlayer(body:IPlaycardUser):Observable<IPlaycardUser>{
    return this.httpService.post<IPlaycardUser,IPlaycardUser>(`${this.urlDefault}create`,body);
  }

  public get(){
    return this.httpService.get<string>(`${this.urlDefault}`);
  }

}
