import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,MatIconModule,RouterOutlet],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.scss',
})
export class ContenidoComponent {

  constructor() {

  }

}
