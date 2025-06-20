import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstappComponent } from './firstapp/firstapp.component';
import { NewcompComponent } from "./newcomp/newcomp.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstappComponent, NewcompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'deploy';
}
