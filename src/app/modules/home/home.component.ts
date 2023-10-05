import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestingService } from 'src/app/services/testing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

public comprimento: string;

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

}
