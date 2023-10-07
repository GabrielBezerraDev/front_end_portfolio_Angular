import { Component, EventEmitter, Output } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Output() onRemoveBlur: EventEmitter<void> = new EventEmitter<void>();
  public visibilidade: string = "visibilidade";


  public setVisibilidade():void{
    this.visibilidade = "";
  }

  public removeBlur():void{
    this.onRemoveBlur.emit();
  }

  public acceptTermo():void{
    this.setVisibilidade();
    this.removeBlur();
  }
}
