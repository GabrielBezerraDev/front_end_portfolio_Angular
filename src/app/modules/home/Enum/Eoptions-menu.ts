import { Injectable } from "@angular/core";
import { IOptionsMenu } from "../interfaces/Ioptions-menu";



export class EOptionsMenu{
  public readonly COMPETENCIAS: Array<IOptionsMenu> =
  [
    {
      icon: "bi bi-window-stack",
      description: "Front-end",
    },
    {
      icon: "bi bi-code-slash",
      description: "Back-end"
    },
    {
      icon:"bi bi-git",
      description:"Versionamento"
    },
    {
      icon:"bi bi-journal-code",
      description:"Linguagens de programação"
    },
    {
      icon:"bi bi-database",
      description:"Data base"
    },
    {
      icon:"bi bi-boxes",
      description:"DevOps"
    },
    {
      icon:"bi bi-motherboard",
      description:"Sistema Operacional"
    }
  ]

  public readonly PROJETOS: Array<IOptionsMenu> =
  [
    {
      icon:"/assets/imgs/icon-pokebola.png",
      description:"Pokedex"
    }
  ]
}
