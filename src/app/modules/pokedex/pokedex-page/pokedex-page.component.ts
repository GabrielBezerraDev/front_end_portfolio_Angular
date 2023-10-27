import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { TypePokemon } from '../interfaces/types-pokemon';
import { AttriubutesPokemon } from '../interfaces/attributes-pokemon';
import { PokemonsTypes } from '../enum/enum-typesPokemon';
import { ScreenUtils } from 'src/app/shared/utils/screen-utils';
import { GridStatus } from '../interfaces/grid-status';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.scss']
})
export class PokedexPageComponent implements OnInit{

public typePokemon: Array<TypePokemon>;

  public carouselCurrent: number = 0;
  public asideDefault: boolean = true;
  public gridSecondary: boolean = true;
  public sectionAttributes: HTMLElement;
  public alignTypes: HTMLElement;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    public pokemonTypes: PokemonsTypes,
    private screenUtils: ScreenUtils
  ){

  }

  ngOnInit(): void {
    this.typePokemon = Object.values(this.pokemonTypes);
    this.sectionAttributes = this.elementRef.nativeElement.querySelector(".section-attributes");
    this.alignTypes = this.elementRef.nativeElement.querySelector(".align-type");
    this.setLayoutDefault();
    console.log(this.screenUtils.getWidthScreen());
    if(this.screenUtils.getWidthScreen() < 1470) this.asideDefault = false;
    if(this.screenUtils.getWidthScreen() <= 892) this.gridSecondary = false;
    //892
  }

  public changeElement(side:string):void{
    let cardCarousel:HTMLDivElement = this.elementRef.nativeElement.querySelector(".carousel-info");
    let carouselElements: NodeListOf<ChildNode> = cardCarousel.childNodes;
    if(side === "left"){
      if(this.carouselCurrent <= 0) return;
      console.log(carouselElements[this.carouselCurrent]);
      this.renderer.removeClass(carouselElements[this.carouselCurrent],"show");
      this.carouselCurrent -= 1;
      console.log(carouselElements[this.carouselCurrent]);
      this.renderer.addClass(carouselElements[this.carouselCurrent],"show");
    }else{
      if(this.carouselCurrent >= carouselElements.length-1) return;
        console.log(carouselElements[this.carouselCurrent]);
        this.renderer.removeClass(carouselElements[this.carouselCurrent],"show");
        this.carouselCurrent += 1;
        console.log(carouselElements[this.carouselCurrent]);
        this.renderer.addClass(carouselElements[this.carouselCurrent],"show");

    }

    // element.scrollIntoView({
    //   inline:"center",
    //   behavior:"smooth"
    // })

    // console.log(carouselElements);
    // console.dir(cardCarousel);
  }

  public changeGrid(gridStatus:GridStatus):void{
    console.log(gridStatus.iconGrid);
    let layout: HTMLElement = this.elementRef.nativeElement.querySelector(".grid-card");
    let currentGrid: HTMLElement = this.elementRef.nativeElement.querySelector(".selected");
    if(gridStatus.grid && layout.classList.contains("gridSecondary")) {
      this.setLayoutDefault();
      this.renderer.removeClass(layout,"gridSecondary")
      this.renderer.removeClass(currentGrid,"selected")
      this.renderer.addClass(gridStatus.iconGrid, "selected");
    }
    else{
      if(!gridStatus.grid && !layout.classList.contains("gridSecondary")) {
        this.setLayoutSecondary();
        this.renderer.addClass(layout,"gridSecondary")
        this.renderer.removeClass(currentGrid,"selected")
        this.renderer.addClass(gridStatus.iconGrid, "selected");
      }
    }
  }

  public setLayoutDefault():void{
    if(this.screenUtils.getWidthScreen() < 1196 && this.screenUtils.getWidthScreen() >= 610){
      this.renderer.setStyle(this.sectionAttributes,"grid-template-columns","repeat(2,1fr)");
      this.renderer.setStyle(this.sectionAttributes,"text-align","center");
      this.renderer.setStyle(this.alignTypes,"align-items","center");
    }
  }

  public setLayoutSecondary():void{
    if(this.screenUtils.getWidthScreen() < 1196){
      this.renderer.setStyle(this.sectionAttributes,"grid-template-columns","1fr");
      this.renderer.setStyle(this.sectionAttributes,"text-align","start");
      this.renderer.setStyle(this.alignTypes,"align-items","start");
    }
  }

}
