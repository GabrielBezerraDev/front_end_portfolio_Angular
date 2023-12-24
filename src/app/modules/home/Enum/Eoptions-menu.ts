import { Injectable } from "@angular/core";
import { IOptionsMenu } from "../interfaces/Ioptions-menu";



export class EOptionsMenu{
  
  public readonly COMPETENCIAS: Array<IOptionsMenu> =
  [
    {
      icon: "bi bi-window-stack",
      description: "Front-end",
      id: "front"
    },
    {
      icon: "bi bi-code-slash",
      description: "Back-end",
      id: "back"
    },
    {
      icon:"bi bi-git",
      description:"Versionamento",
      id:"git"
    },
    {
      icon:"bi bi-journal-code",
      description:"Linguagens de programação",
      id: "lp"
    },
    {
      icon:"bi bi-database",
      description:"Data base",
      id:"db"
    },
    {
      icon:"bi bi-boxes",
      description:"DevOps",
      id:"devOps"
    },
    {
      icon:"bi bi-motherboard",
      description:"Sistema Operacional",
      id:"so"
    }
  ]

  public readonly PROJETOS: Array<IOptionsMenu> =
  [
    {
      icon:"/assets/imgs/icon-pokebola.png",
      description:"Pokedex",
      id: "pokedex"
    }
  ]
}
