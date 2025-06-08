import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiCompComponent } from "./api-comp/api-comp.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ApiCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'newapi';
}
