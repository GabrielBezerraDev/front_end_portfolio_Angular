import { Component } from '@angular/core';

@Component({
  selector: 'app-pokedex-home',
  templateUrl: './pokedex-home.component.html',
  styleUrls: ['./pokedex-home.component.scss']
})
export class PokedexHomeComponent {
  public blur: string = "blurFilter";


  public removeBlur():void{
    this.blur = "";
  }
}
