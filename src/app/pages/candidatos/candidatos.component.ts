import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.listar();
  }

  agregar():void{
    console.log("agregando nuevo");
  }

  editar():void{
    // console.log("editando a "+id);
  }

  eliminar(){

  }

}
