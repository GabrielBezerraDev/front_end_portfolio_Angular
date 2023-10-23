import { Component, ElementRef, Renderer2, OnInit, Output, EventEmitter} from '@angular/core';
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
    iconsSvg:
    [
      "/assets/svg/svg-front-end/bootstrap-svgrepo-com.svg",
      "/assets/svg/svg-front-end/angular-svgrepo-com.svg",
      "/assets/svg/svg-front-end/css-3-svgrepo-com.svg",
      "/assets/svg/svg-front-end/html-5-svgrepo-com.svg",
      "/assets/svg/svg-front-end/javascript-svgrepo-com.svg"
    ]
  },
  {
    titulo: "Back-End",
    estilo:"svg-img-back",
    iconsSvg:
    [
      "/assets/svg/svg-back-end/nodejs-svgrepo-com.svg",
      "/assets/svg/svg-back-end/nestjs-svgrepo-com.svg",
      "/assets/svg/svg-back-end/icons8-express-js.svg"
    ]
  },
  {
    titulo: "Versionamento",
    estilo:"versionamento",
    iconsSvg:
    [
      "/assets/svg/svg-versionamento/github-142-svgrepo-com.svg",
      "/assets/svg/svg-versionamento/git-svgrepo-com.svg"
    ]
  },
  {
    titulo: "Linguagens de Programação",
    estilo: "programming",
    iconsSvg:
    [
      "/assets/svg/svg-programming/typescript-svgrepo-com.svg",
      "/assets/svg/svg-programming/python-svgrepo-com.svg",
      "/assets/svg/svg-programming/icons8-c-programming.svg",
      "/assets/svg/svg-programming/icons8-java.svg",
      "/assets/svg/svg-programming/javascript-svgrepo-com.svg"
    ]
  },
  {
    titulo: "Data base",
    estilo: "dataBase",
    iconsSvg:
    [
      "/assets/svg/svg-dataBase/mongodb-logo-svgrepo-com.svg",
      "/assets/svg/svg-dataBase/mysql-logo-svgrepo-com.svg"
    ]
  },
  {
    titulo: "DevOps",
    estilo: "devOps",
    iconsSvg:
    [
      "/assets/svg/svg-devOps/docker-svgrepo-com.svg",
    ]
  },
  {
    titulo: "Sistemas Operacionais",
    estilo: "sis",
    iconsSvg:
    [
      "/assets/svg/svg-sistemaOperacional/linux-svgrepo-com.svg",
      "/assets/svg/svg-sistemaOperacional/windows-applications-svgrepo-com.svg"
    ]
  }
];

  constructor(){

  }


ngOnInit(): void {
  console.log(widthScreen);

}
public navigateTo():void{
  this.onRouter.emit("pokedex");
}

}
