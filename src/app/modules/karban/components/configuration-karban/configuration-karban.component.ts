import { Component, ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Configuration{
  stagesAmount: Array<number | AbstractControl>,
  names: Array<Array<string> | AbstractControl>
}

@Component({
  selector: 'app-configuration-karban',
  templateUrl: './configuration-karban.component.html',
  styleUrls: ['./configuration-karban.component.scss']
})
export class ConfigurationKarbanComponent {

  @Output() onStagesKarban: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();

public formGroup = this.formBuilder.group({
  stagesAmount: [0],
  names: [[]]
})

constructor(
  public formBuilder: FormBuilder,
  private elementRef: ElementRef,
  private renderer: Renderer2
){
  this.initForm();
}

private initForm():void{

}

private getValueForm<T>(key: keyof (typeof this.formGroup.value)): T{
  return this.formGroup.value[key] as T;
}

private setValueForm<T>(key: keyof (typeof this.formGroup.value), value: T): void{
  (this.formGroup.value[key] as T) = value;
}

private showValue():void{
  console.log(this.formGroup.value.names);
}

public stagesAmount():void{
  console.log(this.getValueForm<Array<string>>("names").length);
  console.log(this.getValueForm<Array<number>>("stagesAmount"));
  if(this.getValueForm<Array<string>>("names").length > this.getValueForm<number>("stagesAmount")){
    this.setValueForm("names",this.getValueForm<Array<string>>("names").slice(0,this.getValueForm<number>("stagesAmount")));
    this.showValue();
  }
}

public addStageName(name:string):void{
  this.getValueForm<Array<string>>("names").push(name);
}

public showForm():void{
  console.log(this.formGroup.value);
}

public createKarban():void{
  console.log(this.getValueForm<Array<string>>("names"));
  this.onStagesKarban.emit(this.getValueForm<Array<string>>("names"));
  this.renderer.addClass(this.elementRef.nativeElement.querySelector(".modal-karban"), "hidden-modal");
}

}
