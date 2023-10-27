import { Component, ElementRef, Renderer2, OnInit, Output, EventEmitter, ViewChild, ViewChildren, Query, QueryList} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Competencias } from '../interfaces/competencias';
import { styleRoot, widthScreen } from 'src/app/shared/utils/style-utils';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {
@Output() onRouter: EventEmitter<string> = new EventEmitter<string>();
public competencias: Array<Competencias> =
[
  {
    titulo: "Front-End",
    estilo:"svg-img-front",
    maestrias:
    [
      {
        iconSvg: "/assets/svg/svg-front-end/bootstrap-svgrepo-com.svg",
        level: 3
      },
      {
        iconSvg: "/assets/svg/svg-front-end/angular-svgrepo-com.svg",
        level: 3
      },
      {
        iconSvg: "/assets/svg/svg-front-end/css-3-svgrepo-com.svg",
        level: 4
      },
      {
        iconSvg: "/assets/svg/svg-front-end/html-5-svgrepo-com.svg",
        level: 4
      },
      {
        iconSvg: "/assets/svg/svg-front-end/javascript-svgrepo-com.svg",
        level: 4
      }
    ]
  },
  {
    titulo: "Back-End",
    estilo:"svg-img-back",
    maestrias:
    [
      {
        iconSvg: "/assets/svg/svg-back-end/nodejs-svgrepo-com.svg",
        level: 3
      },
      {
        iconSvg: "/assets/svg/svg-back-end/nestjs-svgrepo-com.svg",
        level: 2
      },
      {
        iconSvg: "/assets/svg/svg-back-end/icons8-express-js.svg",
        level: 3
      }
    ]
  },
  {
    titulo: "Versionamento",
    estilo:"versionamento",
    maestrias:
    [
      {
        iconSvg: "/assets/svg/svg-versionamento/github-142-svgrepo-com.svg",
        level: 4
      },
      {
        iconSvg: "/assets/svg/svg-versionamento/git-svgrepo-com.svg",
        level: 3
      }
    ]
  },
  {
    titulo: "Linguagens de Programação",
    estilo: "programming",
    maestrias:
    [
      {
        iconSvg: "/assets/svg/svg-programming/typescript-svgrepo-com.svg",
        level: 3
      },
      {
        iconSvg: "/assets/svg/svg-programming/python-svgrepo-com.svg",
        level: 2
      },
      {
        iconSvg: "/assets/svg/svg-programming/icons8-c-programming.svg",
        level: 2
      },
      {
        iconSvg:"/assets/svg/svg-programming/icons8-java.svg",
        level: 3
      },
      {
        iconSvg: "/assets/svg/svg-programming/javascript-svgrepo-com.svg",
        level: 4
      }
    ]
  },
  {
    titulo: "Data base",
    estilo: "dataBase",
    maestrias:
    [
      {
        iconSvg: "/assets/svg/svg-dataBase/mongodb-logo-svgrepo-com.svg",
        level: 2
      },
      {
        iconSvg: "/assets/svg/svg-dataBase/mysql-logo-svgrepo-com.svg",
        level: 3
      }
    ]
  },
  {
    titulo: "DevOps",
    estilo: "devOps",
    maestrias:
    [
      {
        iconSvg: "/assets/svg/svg-devOps/docker-svgrepo-com.svg",
        level: 3
      }
    ]
  },
  {
    titulo: "Sistemas Operacionais",
    estilo: "sis",
    maestrias:
    [
      {
        iconSvg: "/assets/svg/svg-sistemaOperacional/linux-svgrepo-com.svg",
        level: 3
      },
      {
        iconSvg: "/assets/svg/svg-sistemaOperacional/windows-applications-svgrepo-com.svg",
        level: 2
      }
    ]
  }
];

@ViewChild('main', {static:false}) teste: HTMLElement;
public showCompetencia: Array<boolean> = [false, false, false, false, false, false, false];
public levels: NodeListOf<HTMLElement>;
public cout: number = 0;
public level: number = 0;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ){

  }


ngOnInit(): void {
  console.log(widthScreen);

}
public navigateTo():void{
  this.onRouter.emit("pokedex");
}

public test(i:number){
  alert(i);
}

public selectedTech(indexTech:number, indexMain: number, level: number):void{
  console.log(level);
  this.showCompetencia[indexMain] = true;
  setTimeout(() => {
    let mastery: HTMLElement = this.elementRef.nativeElement.querySelectorAll(".mastery")[indexMain];
    this.levels = mastery.querySelectorAll(".mastery-level");
    this.animationBar(level);
  }, 100);

}

public animationBar(level: number):void{
  this.level = level;
  if(this.cout === this.level) return;
  setTimeout(() => {
    this.renderer.setStyle(this.levels[this.cout], "width","20%");
    this.cout++;
    this.animationBar(this.level);
  }, 1000)
}

}
