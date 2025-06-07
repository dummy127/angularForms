import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstappComponent } from './firstapp/firstapp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FirstappComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'deploy';
}
