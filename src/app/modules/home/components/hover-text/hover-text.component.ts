import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hover-text',
  templateUrl: './hover-text.component.html',
  styleUrls: ['./hover-text.component.scss']
})
export class HoverTextComponent {

@Input() textBox: string = "Texto aqui";

}
