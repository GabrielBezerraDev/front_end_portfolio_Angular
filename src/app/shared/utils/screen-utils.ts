import { Injectable } from "@angular/core";

@Injectable({
  providedIn:"root"
})
export class ScreenUtils{
  private screenWidth: number = window.innerWidth;
  private screenHeight: number = window.innerHeight;


  public getWidthScreen():number{
    return this.screenWidth;
  }

  public getHeightScreen():number{
    return this.screenHeight;
  }

}
