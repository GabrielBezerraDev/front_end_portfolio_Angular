import { Component } from '@angular/core';
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
  private testing: TestingService
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

}
