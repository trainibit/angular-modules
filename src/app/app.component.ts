import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { ModulosService } from './service/modulos.service';
import { ContenidoComponent } from "./components/contenido/contenido.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule, 
    ContenidoComponent,CommonModule],
  providers:[ModulosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'practice1-np-app';
  showFiller = false;
  modulos: any[] =[];


  constructor(private modulosService: ModulosService){}

  ngOnInit(): void {
    this.loadModulos();
  }

  loadModulos(): void{
    this.modulosService.getModulos().subscribe(
      (data) => {
        this.modulos = data;
      },
      (error) =>{
        console.error('Eroor obteniendo modulos', error);
      }
    )
  }

}
