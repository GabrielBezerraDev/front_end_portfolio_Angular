import { Component, ElementRef, Renderer2, OnInit, Output, EventEmitter, ViewChild, ViewChildren, Query, QueryList, AfterContentInit, AfterViewInit, AfterViewChecked, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICompetencias } from '../interfaces/Icompetencias';
import { styleRoot, widthScreen } from 'src/app/shared/utils/style-utils';
import { EMasteryLevel } from '../Enum/Emastery-level';
import { ScreenUtils } from 'src/app/shared/utils/screen-utils';
import { body } from 'src/app/shared/utils/document-utils';
import { ModalComponent } from 'src/app/shared/modules/modal/modal.component';
import { ECompetencia } from '../Enum/Ecompetencia';
import { style } from '@angular/animations';


@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements AfterViewInit {
@Output() onRouter: EventEmitter<string> = new EventEmitter<string>();
@Input() isMenuMobile: boolean;
@ViewChild(ModalComponent) modal: ModalComponent;
public competencias:Array<ICompetencias> = [];
public showCompetencia: Array<boolean> = [true, true, true, true, true, true, true];
public levels: NodeListOf<HTMLElement>;
public mastery: NodeListOf<HTMLElement>;
public cout: number = 0;
public coutClass: Array<number> = [0,0,0,0,0,0,0];
public level: number = 0;
public masteryLevels: Array<string> = Object.values(EMasteryLevel);
public styleSpan: string = "styleLegend";
public isAlreadyPage: boolean = false;
public modalActived: boolean = false;
public menuIsOpen: boolean = false;
public isClicked: boolean = false;

  constructor(
    private ecompetencias: ECompetencia,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private screenUtils: ScreenUtils,
  ){
    this.competencias = this.ecompetencias.COMPETENCIAS;
  }

ngAfterViewInit(): void {
  this.disable();
}

public disable():void{
  this.mastery = this.elementRef.nativeElement.querySelectorAll(".icons");
  for(let i: number = 0; i < this.showCompetencia.length; i++){
    this.showCompetencia[i] = false;
  }
}

public navigateTo():void{
  if(!this.isAlreadyPage){
    setTimeout(() => {
      this.addFilter();
      this.modal.openModal();
      return;
    }, 1);
  }
  this.onRouter.emit("pokedex");
}

public hiddenMenu():void{
  this.renderer.addClass(this.elementRef.nativeElement.querySelector(".menu-page"),"hidden-menu");
  // alert("Escondeu");
}

public showMenu():void{
  this.renderer.removeClass(this.elementRef.nativeElement.querySelector(".menu-page"),"hidden-menu");
  // alert("Apareceu");
}

public selectedTech(indexTech:number, indexMain: number, level: number, tech: string, resumo?: string):void{
  this.showCompetencia[indexMain] = true;
  this.isClicked = true;
  setTimeout(() => {
    console.log(this.mastery);
    this.levels = this.mastery[indexMain].querySelectorAll(".mastery-level");
    this.setResumo(indexMain, resumo);
    this.animationBar(level, indexMain);
    this.setLegends(indexMain, tech, level);
  }, 100);
}

public setResumo(indexMain:number, resumo?:string):void{
  let description: HTMLElement | null = this.mastery[indexMain].querySelector(".mastery-description");
  if(description && resumo) {
    description.innerHTML = resumo;
  }
}

public setLegends(indexMain:number, tech: string, level:number):void{
  let legend: HTMLElement | null = this.mastery[indexMain].querySelector(".hidden");
  if(legend){
    if(!legend.classList.contains("show")) this.renderer.addClass(legend,"show");
    legend.innerHTML = `Nível de Habilidade com ${tech}: <span style="color: #b168db;font-weight:bold;"> ${this.masteryLevels[level-1]} </span><br><hr>`;
  }
}

public animationBar(level: number, indexMain: number):void{
  if(this.coutClass[indexMain] === level) return;
  setTimeout(() => {
    if(level > this.coutClass[indexMain]){
      this.renderer.setStyle(this.levels[this.coutClass[indexMain]], "width","20%");
      this.coutClass[indexMain]++;
    }else{
      this.coutClass[indexMain]--;
      this.renderer.setStyle(this.levels[this.coutClass[indexMain]], "width","0%");
    }
    this.animationBar(level,indexMain);
  }, 500)
}

public removeFilter():void{
  this.renderer.removeClass(this.elementRef.nativeElement.querySelector(".blurFilter"),"blurFilter");

}

public addFilter():void{
  this.renderer.addClass(this.elementRef.nativeElement.querySelector("main"),"blurFilter");
}

public openMenu():void{
  let menu = this.elementRef.nativeElement.querySelector(".menu-aside") as HTMLDivElement;
  this.renderer.setStyle(menu,"left","0%");
  styleRoot.style.setProperty("--body-y","hidden");
  this.menuIsOpen = true;
}

public closeMenu():void{
  let menu = this.elementRef.nativeElement.querySelector(".menu-aside") as HTMLDivElement;
  this.renderer.setStyle(menu,"left","-100%");
  this.menuIsOpen = false;
  styleRoot.style.setProperty("--body-y","none");
}

public menuMobile():void{
  if(this.isMenuMobile) this.closeMenu();
}

}
