import { Component } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animacion-basica',
  templateUrl: './animacion-basica.component.html',
  styleUrls: ['./animacion-basica.component.css'],
  animations: [
    trigger('animacionCuadro', [
      state('estado1', style({
        backgroundColor: 'cyan'
      })),
  
      state('estado2', style({
        backgroundColor: 'black',
        width:'200px',
        height:'200px'
      })),
      transition('estado1 <=> estado2',
      animate(1000)
      )
    ])
  ]
})
export class AnimacionBasicaComponent {
  estadoCuadro = 'estado1';

  animar()
  {
    this.estadoCuadro = this.estadoCuadro === 'estado1' ? 'estado2' : 'estado1';
  }
}
