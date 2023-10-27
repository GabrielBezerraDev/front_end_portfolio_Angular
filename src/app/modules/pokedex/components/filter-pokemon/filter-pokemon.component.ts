import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { GridStatus } from '../../interfaces/grid-status';

@Component({
  selector: 'app-filter-pokemon',
  templateUrl: './filter-pokemon.component.html',
  styleUrls: ['./filter-pokemon.component.scss']
})
export class FilterPokemonComponent {

  @Output() onChangeGrid: EventEmitter<GridStatus> = new EventEmitter<GridStatus>();
  @Input() asideDefault: boolean;
  @Input() gridSecondary: boolean;

  constructor(
    private renderer: Renderer2
  ){}


  public changeGrid(iconGrid: HTMLElement, grid?:string ):void{
    let gridStatus: GridStatus =
    {
      grid: grid,
      iconGrid: iconGrid
    }
    this.onChangeGrid.emit(gridStatus);
  }

  public dropDown(icon: HTMLElement,dropDownBody:HTMLDivElement):void{
    console.log(icon);
    console.log(dropDownBody);
    if(icon.classList.contains("rotateInit")){
      this.renderer.removeClass(icon,"rotateInit");
      this.renderer.addClass(icon,"rotateEnd");
    }else{
      this.renderer.addClass(icon,"rotateInit");
      this.renderer.removeClass(icon,"rotateEnd");
    }
    dropDownBody.classList.toggle("show");
  }

}
