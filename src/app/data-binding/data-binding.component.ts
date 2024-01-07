import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  urlImagem:string = 'http://lorempixel.com.br/400/200';
  isTrue: boolean = true;

  getValor(){
    return 2;
  }

  getFalse(){
    return false;
  }
}
