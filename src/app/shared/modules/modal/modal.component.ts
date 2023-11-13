import { Component, ElementRef, EventEmitter, Input, Output, AfterViewInit } from '@angular/core';
import { styleRoot } from '../../utils/style-utils';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit {
  @Output() onRemoveBlur: EventEmitter<void> = new EventEmitter<void>();
  @Input() tittleModal: string = "Faça Login";
  public visibilidade: string = "";

  public modal: HTMLElement;

  constructor(
    private elementRef: ElementRef
  ){}

  ngAfterViewInit(): void {
    if(!this.visibilidade) return;
    this.openModal();
  }

  public setVisibilidade(visibilidade:string):void{
    this.visibilidade = visibilidade;
  }

  public removeBlur():void{
    this.onRemoveBlur.emit();
  }

  public openModal():void{
    styleRoot?.style.setProperty("--body-y","hidden");
    this.modal = this.elementRef.nativeElement.querySelector(".modal");
    setTimeout(() => {
      this.modal.style.opacity = "1";
    }, 1);
  }

  public acceptTermo(visibilidade:string):void{
    this.modal.style.opacity = "0";
    this.removeBlur();
    styleRoot?.style.setProperty("--body-y","none");
    setTimeout(() => {
      this.setVisibilidade(visibilidade);
    }, 1400)
  }
}
