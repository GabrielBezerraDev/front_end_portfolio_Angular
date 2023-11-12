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
  @Input() visibilidade: string = "visibilidade";
  public modal: HTMLElement;

  constructor(
    private elementRef: ElementRef
  ){}

  ngAfterViewInit(): void {

    // styleRoot?.style.setProperty("--body-y","hidden");

    this.modal = this.elementRef.nativeElement.querySelector(".modal");
    setTimeout(() => {
      this.modal.style.opacity = "1";
    }, 1)
  }

  public setVisibilidade():void{
    this.visibilidade = "";
  }

  public removeBlur():void{
    this.onRemoveBlur.emit();
  }

  public acceptTermo():void{
    this.modal.style.opacity = "0";
    styleRoot?.style.setProperty("--body-y","none");
    this.setVisibilidade();
    this.removeBlur();
  }
}
