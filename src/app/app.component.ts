import { Component, OnInit } from '@angular/core';
import { styleRoot, widthScreen } from './shared/utils/style-utils';

    const style = styleRoot?.style;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portifolio_Angular';

ngOnInit(): void {
    this.setStyle();
}


  public setStyle():void{
    let font: string = "";
    let widthFormat: string = "";
    if(widthScreen <= 589){
      widthFormat = "93%";
    }
    if(widthScreen > 388 && widthScreen <= 589){
      font = "1.2em";
    }
    if(widthScreen <= 388){
      font = "1em";
    }
    this.setFont(font);
    this.setWidthFormat(widthFormat);
  }

  public setFont(font:string):void{
    if(!font) return;
    style?.setProperty("--font-size",font);
  }

  public setWidthFormat(widthFormat:string):void{
    if(!widthFormat) return;
    style?.setProperty("--width-format",widthFormat);
  }
}
