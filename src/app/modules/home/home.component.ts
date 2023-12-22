import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestingService } from 'src/app/services/testing.service';
import { PageHomeComponent } from './page-home/page-home.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

public comprimento: string;
@ViewChild(PageHomeComponent) pageHome: PageHomeComponent;

constructor
(
  private testing: TestingService,
  private router: Router,
  private route: ActivatedRoute
){
  this.getHelloWorld();
}

public getHelloWorld():void{
  this.testing.getTesting().subscribe({
    next: (res) => {
      this.comprimento = res;
      console.log(this.comprimento);
    }
  })
}

public navigateTo(router: string):void{
  this.router.navigate([router],{relativeTo: this.route});
}

public openMenu():void{
  this.pageHome.openMenu();
}

}
