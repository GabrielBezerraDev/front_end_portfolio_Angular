import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { IOptionsMenu } from '../../../interfaces/Ioptions-menu';
import { EOptionsMenu } from '../../../Enum/Eoptions-menu';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent implements OnInit {
  public currentOptions: Array<IOptionsMenu> = [];

  constructor(
    private renderer: Renderer2,
    public options: EOptionsMenu
  ) { }

  ngOnInit() {
  }

  public hoverElement(classElement:string):void{
    alert(classElement);
  }

  public transitionMenu(menu: HTMLElement, test:keyof EOptionsMenu):void{
    this.renderer.setStyle(menu,"width","0%");
    this.currentOptions = this.options[test];
  }

}
