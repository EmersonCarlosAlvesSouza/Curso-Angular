import { Component } from '@angular/core';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:  [MeuPrimeiroComponent, MeuPrimeiro2Component],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'primeiro-projeto';
}
