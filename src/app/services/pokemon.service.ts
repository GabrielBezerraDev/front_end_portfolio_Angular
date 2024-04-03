import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { TypePokemon } from '../modules/pokedex/interfaces/types-pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private urlDefault: string = "pokemon/";

  constructor(private httpService: HttpService) { }

public getAllTypePokemon():Observable<Array<TypePokemon>>{
  return this.httpService.get<Array<TypePokemon>>(`${this.urlDefault}type-pokemon`);
}

}
