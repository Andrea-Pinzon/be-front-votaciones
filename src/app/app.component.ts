import { Component } from '@angular/core';

//Decorador.
//Si cambiamos el nombre del selector hay que cambiar la etiqueta principal del index.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Definir variables y sus valores. *Propiedad
export class AppComponent {

  // constructor() { }

  ngOnInit(): void {
  }


  constructor(){  }

}
