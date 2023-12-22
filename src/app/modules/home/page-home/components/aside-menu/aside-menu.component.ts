import { Component, Inject, ElementRef, OnInit, Renderer2, AfterViewInit } from '@angular/core';
import { IOptionsMenu } from '../../../interfaces/Ioptions-menu';
import { EOptionsMenu } from '../../../Enum/Eoptions-menu';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent implements OnInit, AfterViewInit{
  public currentOptions: Array<IOptionsMenu> = [];
  public menu: HTMLDivElement;
  public tittle: string;
  public subMenuActived: boolean = false;
  constructor(
    private renderer: Renderer2,
    private element: ElementRef,
    public options: EOptionsMenu
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.menu = this.element.nativeElement.querySelector(".menu");
  }

  public hoverElement(classElement:string):void{
    alert(classElement);
  }

  public returnMainMenu():void{
    this.renderer.setStyle(this.menu,"width","fit-content");
  }

  public transitionMenu(option:keyof EOptionsMenu, tittle: string):void{
    this.subMenuActived = true;
    this.tittle = tittle;
    this.renderer.setStyle(this.menu,"width","0%");
    setTimeout(() => {
      this.renderer.setStyle(this.menu,"display","none");
    }, 400)
    this.currentOptions = this.options[option];
  }

}
