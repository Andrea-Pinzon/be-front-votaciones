import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatosService } from 'src/app/servicios/candidatos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {
  candidato : any;
  nombresColumnas: string[] = ['#Resolucion','Cedula','Nombre','Apellido'];

  constructor(private miServicioCandidatos: CandidatosService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicioCandidatos.listar().
      subscribe(data => {
        this.candidato=data;
    });
  }

  agregar():void{
    this.router.navigate(['/dashboard/crear']);
  }

  editar(id: string):void{
    this.router.navigate(['/dashboard/actualizar/' +id]);
  }

  eliminar(id:string):void{
    Swal.fire({
      title: 'Eliminar Candidato',
      text: "Está seguro que quiere eliminar este candidato?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioCandidatos.eliminar(id).subscribe(data => {
          Swal.fire(
            'Eliminado!',
            'El Candidato ha sido eliminado correctamente',
            'success'
          );
          this.ngOnInit();
        });
      }
    })
  }
}