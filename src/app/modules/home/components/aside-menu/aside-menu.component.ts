import { Component, Inject, ElementRef, OnInit, Renderer2, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { IOptionsMenu } from '../../interfaces/Ioptions-menu';
import { EOptionsMenu } from '../../Enum/Eoptions-menu';
import { IFunc } from '../../interfaces/Ifunc';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent implements OnInit, AfterViewInit{
  @Output() onCloseMenu: EventEmitter<void> = new EventEmitter<void>();
  public currentOptions: Array<IOptionsMenu> = [];
  public menu: HTMLDivElement;
  public subMenu: HTMLDivElement;
  public tittle: string = "Tópicos";
  public subMenuActived: boolean = false;
  public classIcon: string = "bi bi-x-circle-fill";
  public currentFunction: string;
  constructor(
    private renderer: Renderer2,
    private element: ElementRef,
    public options: EOptionsMenu
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.menu = this.element.nativeElement.querySelector(".menu");
    this.subMenu = this.element.nativeElement.querySelector(".subMenu");
  }

  public hoverElement(classElement:string):void{
    alert(classElement);
  }

  // public returnMainMenu():void{
  //   this.renderer.setStyle(this.menu,"width","fit-content");
  // }

  public transitionMenu(option:keyof EOptionsMenu, tittle: string, classIcon:string):void{
    this.subMenuActived = true;
    this.tittle = tittle;
    this.classIcon = classIcon;
    this.currentFunction = "back";
    this.renderer.setStyle(this.menu,"width","0%");
    this.renderer.setStyle(this.subMenu, "display","block");
    setTimeout(() => {
      this.renderer.setStyle(this.menu,"display","none");
    }, 400);
    this.currentOptions = this.options[option];
  }

  public closeMenu():void{
    this.onCloseMenu.emit();
  }

  public backToTopics():void{
    this.renderer.setStyle(this.menu,"display","flex");
    setTimeout(() => {
      this.renderer.setStyle(this.menu,"width","100%");
    }, 1);
    setTimeout(() => {
      this.renderer.setStyle(this.subMenu, "display","none");
    }, 200);
    this.currentFunction = "";
    this.classIcon = "bi bi-x-circle-fill";
    this.tittle = "Tópicos";
  }

  public executeFunction(func:string):void{
    func === "back" ? this.backToTopics() : this.closeMenu();
  }

}
