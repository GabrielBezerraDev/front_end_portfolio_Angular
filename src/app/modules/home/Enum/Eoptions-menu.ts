import { Injectable } from "@angular/core";
import { IOptionsMenu } from "../interfaces/Ioptions-menu";



export class EOptionsMenu{

  public readonly PERFIL: Array<IOptionsMenu> =
  [
    {
      icon:"bi bi-person-vcard-fill",
      description:"Sobre mim",
      id: "aboutMe"
    },
    {
      icon:"bi bi-clipboard2-check-fill",
      description:"Experiência",
      id: "experience"
    },
    {
      icon:"bi bi-book-half",
      description:"Formação",
      id: "formation"
    },
    {
      icon:"bi bi-journal-text",
      description:"Estudos complementares",
      id: "studies"
    },
    {
      icon:"bi bi-globe-americas",
      description:"Línguas",
      id: "languages"
    },
    {
      icon:"bi bi-globe",
      description:"Redes sociais",
      id: "socialMedia"
    }
  ]

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
