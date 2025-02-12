import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconRegistry,MatIconModule} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
