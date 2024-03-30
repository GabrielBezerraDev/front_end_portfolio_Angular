import { Component, ViewChild, AfterViewInit} from '@angular/core';
import { ModalComponent } from '../../shared/modules/modal/modal.component';
import { styleRoot } from 'src/app/shared/utils/style-utils';

@Component({
  selector: 'app-playing-cards',
  templateUrl: './playing-cards.component.html',
  styleUrls: ['./playing-cards.component.scss']
})
export class PlayingCardsComponent implements AfterViewInit {
  @ViewChild(ModalComponent) modalComponent: ModalComponent;
  public deckCards: Array<string> = [];

  constructor(){}

  ngAfterViewInit(): void {
    styleRoot?.style.setProperty("--body-y","hidden");
  }

  

}
