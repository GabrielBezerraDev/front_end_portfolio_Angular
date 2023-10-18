import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { TypePokemon } from 'src/app/interfaces/types-pokemon';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.scss']
})
export class PokedexPageComponent implements OnInit{

public typePokemon: Array<TypePokemon> =
  [
    {
      tittle: "Normal",
      iconType: "/assets/svg/pokemon/pokemon-types/normal.svg",
      iconColor: "#807d77"
    },
    {
      tittle: "Fire",
      iconType: "/assets/svg/pokemon/pokemon-types/fire.svg",
      iconColor: "#ffc400"
    },
    {
      tittle: "Water",
      iconType: "/assets/svg/pokemon/pokemon-types/water.svg",
      iconColor:"#4132ed"
    },
    {
      tittle: "Grass",
      iconType:"/assets/svg/pokemon/pokemon-types/grass.svg",
      iconColor:"#108004"
    },
    {
      tittle:"Ice",
      iconType:"/assets/svg/pokemon/pokemon-types/ice.svg",
      iconColor:"#1babb5"
    },
    {
      tittle:"Bug",
      iconType:"/assets/svg/pokemon/pokemon-types/bug.svg",
      iconColor:"#adf26d"
    },
    {
      tittle:"Eletric",
      iconType:"/assets/svg/pokemon/pokemon-types/electric.svg",
      iconColor:"#7722c7"
    },
    {
      tittle:"Rock",
      iconType:"/assets/svg/pokemon/pokemon-types/rock.svg",
      iconColor:"#b59c62"
    },
    {
      tittle:"Fairy",
      iconType:"/assets/svg/pokemon/pokemon-types/fairy.svg",
      iconColor:"#ba22ad"
    },
    {
      tittle:"Fighting",
      iconType:"/assets/svg/pokemon/pokemon-types/fighting.svg",
      iconColor:"#e6261c"
    },
    {
      tittle:"Ghost",
      iconType:"/assets/svg/pokemon/pokemon-types/ghost.svg",
      iconColor:"#735dd4"
    },
    {
      tittle:"Poison",
      iconType:"/assets/svg/pokemon/pokemon-types/poison.svg",
      iconColor:"#751e72"
    },
    {
      tittle:"Flying",
      iconType:"/assets/svg/pokemon/pokemon-types/flying.svg",
      iconColor:"#55d2d4"
    },
    {
      tittle:"Dark",
      iconType:"/assets/svg/pokemon/pokemon-types/dark.svg",
      iconColor:"#1a1c1c"
    },
    {
      tittle:"Dragon",
      iconType:"/assets/svg/pokemon/pokemon-types/dragon.svg",
      iconColor:"#2d275c"
    },
    {
      tittle:"Ground",
      iconType:"/assets/svg/pokemon/pokemon-types/ground.svg",
      iconColor:"#a66e0f"
    },
    {
      tittle:"Psychic",
      iconType:"/assets/svg/pokemon/pokemon-types/psychic.svg",
      iconColor:"#bf6370"
    },
    {
      tittle:"Steel",
      iconType:"/assets/svg/pokemon/pokemon-types/steel.svg",
      iconColor:"#557fa1"
    }
  ]

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ){

  }

  ngOnInit(): void {


  }

  public next():void{
    this.renderer.setStyle(this.elementRef.nativeElement.querySelector(".teste"),"transform","translateX(-500px)");
  }

}
