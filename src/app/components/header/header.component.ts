import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() onOpenMenu: EventEmitter<void> = new EventEmitter<void>();

  public openMenu():void{
    this.onOpenMenu.emit();
  }

}
