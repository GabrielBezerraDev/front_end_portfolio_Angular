import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { ScreenUtils } from 'src/app/shared/utils/screen-utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

public comprimento: string;
@ViewChild(PageHomeComponent) pageHome: PageHomeComponent;
public isMenuMobile: boolean = false;

constructor
(
  private router: Router,
  private route: ActivatedRoute,
  private screenUtils: ScreenUtils
){
  this.typeMenu();
}

private typeMenu():void{
  if(this.screenUtils.getWidthScreen() <= 650) this.isMenuMobile = true;
}

public navigateTo(router: string):void{
  this.router.navigate([router],{relativeTo: this.route});
}

public openMenu():void{
  this.pageHome.openMenu();
}

public menuMobile(element:HTMLElement):void{
  if(element.classList.contains("subMenuOption")) this.pageHome.menuMobile();
}

}
