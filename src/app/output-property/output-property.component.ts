import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss'],
 // outputs: ['emitFilme']
})
export class OutputPropertyComponent {

  nomeFilme: string='';
 @Output() emitFilme = new EventEmitter;

  setNomeFilme(nomeFilme: string){
    this.nomeFilme = nomeFilme;
    this.emitFilme.emit({nomeFilme:this.nomeFilme});
  }
}
