import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestingService extends HttpService{

public getTesting():Observable<string>{
  return this.getHttp().get<string>("api/user");
}

}
