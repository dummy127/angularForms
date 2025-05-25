import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Form1Component,Form2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularForms';
}
