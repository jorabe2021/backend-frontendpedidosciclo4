import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {
  fgvalidador: any;

  constructor() { }

  ngOnInit(): void {
  }
  IdentificarUsuario(){
    let usuario = this.fgvalidador.controls["usuario"].value;
    let clave = this.fgvalidador.controls["clave"].value;
    alert(usuario)
    alert(clave)
  }
}
