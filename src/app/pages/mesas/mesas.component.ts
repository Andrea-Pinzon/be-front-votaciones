import { Component, Input, OnInit } from '@angular/core';
import { MesasService } from 'src/app/servicios/mesas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit {
  mesas : any;
  nombresColumnas: string[] = ['Mesas','Cedulas inscritas'];

  constructor(private miServicioMesas: MesasService) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicioMesas.listar().
      subscribe(data => {
        this.mesas=data;
    });
  }

  agregar():void{
    // this.router.navigate(['/dashboard/crear']);
  }

  editar(id: string):void{
    // this.router.navigate(['/dashboard/actualizar/' +id]);
  }


  eliminar(id:string):void{
    Swal.fire({
      title: 'Eliminar Mesa',
      text: "Está seguro que quiere eliminar esta mesa?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioMesas.eliminar(id).subscribe(data => {
          Swal.fire(
            'Eliminado!',
            'La mesa ha sido eliminada correctamente',
            'success'
          );
          this.ngOnInit();
        });
      }
    })
  }
}