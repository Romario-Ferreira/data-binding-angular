import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  urlImagem:string = 'http://lorempixel.com.br/400/200';
  isTrue: boolean = true;
  valorAtual: string = '';
  valorSalvo: string ='';
  isMouseOver: boolean = false;

  getValor(){
    return 2;
  }

  getFalse(){
    return false;
  }

  onClick(){
    alert("botao clicado");
  }

  salvarValor(evento: string){
    this.valorSalvo = evento;
  }

  onKeyUp(evento:KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  mouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
}
