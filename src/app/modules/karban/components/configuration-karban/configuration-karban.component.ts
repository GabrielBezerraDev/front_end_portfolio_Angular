import { Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ICardStage } from '../../interfaces/ICardStage';

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

  @Input() optionsCard: boolean;

  @Output() onStagesKarban: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();
  @Output() onNewCard: EventEmitter<ICardStage> = new EventEmitter<ICardStage>();

  public configurationKarban = this.formBuilder.group({
    stagesAmount: [0],
    names: [[]]
  })

  public configurationCard = this.formBuilder.group({
    tittleCard: "",
    descriptionCard: ""
  })
  public test: ICardStage = {
    tittleCard:"",
    descriptionCard:"",
    stageCard:""
  };

  public isSettingKarban: boolean = false;

constructor(
  public formBuilder: FormBuilder,
  private elementRef: ElementRef,
  private renderer: Renderer2
){
  this.initForm();
}

private initForm():void{

}

private getValueForm<T>(key: keyof (typeof this.configurationKarban.value)): T{
  return this.configurationKarban.value[key] as T;
}

private setValueForm<T>(key: keyof (typeof this.configurationKarban.value), value: T): void{
  (this.configurationKarban.value[key] as T) = value;
}

private showValue():void{
  console.log(this.configurationKarban.value.names);
}

public stagesAmount():void{
  console.log(this.getValueForm<Array<string>>("names").length);
  console.log(this.getValueForm<Array<number>>("stagesAmount"));
  if(this.getValueForm<Array<string>>("names").length > this.getValueForm<number>("stagesAmount")){
    this.setValueForm("names",this.getValueForm<Array<string>>("names").slice(0,this.getValueForm<number>("stagesAmount")));
    this.showValue();
  }
}

public closeOptionsCard():void{
    this.optionsCard = false;
}

public addStageName(name:string):void{
  this.getValueForm<Array<string>>("names").push(name);
}

public showForm():void{
  // console.log(this.configurationKarban.value);
}

public createKarban():void{
  // console.log(this.getValueForm<Array<string>>("names"));
  this.onStagesKarban.emit(this.getValueForm<Array<string>>("names"));
  // this.renderer.addClass(this.elementRef.nativeElement.querySelector(".modal-karban"), "hidden-modal");
  this.isSettingKarban = true;
}

public createCard():void{
  this.onNewCard.emit(this.configurationCard.value as ICardStage);
}

}
