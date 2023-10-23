import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { TypePokemon } from '../interfaces/types-pokemon';
import { AttriubutesPokemon } from '../interfaces/attributes-pokemon';
import { PokemonsTypes } from '../enum/enum-typesPokemon';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.scss']
})
export class PokedexPageComponent implements OnInit{

public typePokemon: Array<TypePokemon>;

  public carouselCurrent: number = 0;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    public pokemonTypes: PokemonsTypes
  ){

  }

  ngOnInit(): void {
    this.typePokemon = Object.values(this.pokemonTypes);
  }

  public changeElement(side:string):void{
    let cardCarousel:HTMLDivElement = this.elementRef.nativeElement.querySelector(".carousel-info");
    let carouselElements: NodeListOf<ChildNode> = cardCarousel.childNodes;
    if(side === "left"){
      if(this.carouselCurrent <= 0) return;
      console.log(carouselElements[this.carouselCurrent]);
      this.renderer.removeClass(carouselElements[this.carouselCurrent],"currentElement");
      this.carouselCurrent -= 1;
      console.log(carouselElements[this.carouselCurrent]);
      this.renderer.addClass(carouselElements[this.carouselCurrent],"currentElement");
    }else{
      if(this.carouselCurrent >= carouselElements.length-1) return;
        console.log(carouselElements[this.carouselCurrent]);
        this.renderer.removeClass(carouselElements[this.carouselCurrent],"currentElement");
        this.carouselCurrent += 1;
        console.log(carouselElements[this.carouselCurrent]);
        this.renderer.addClass(carouselElements[this.carouselCurrent],"currentElement");

    }


    // element.scrollIntoView({
    //   inline:"center",
    //   behavior:"smooth"
    // })

    // console.log(carouselElements);
    // console.dir(cardCarousel);
  }

}
