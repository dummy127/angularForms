import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css',
})
export class Form2Component {
  @ViewChild('form') signUPForm!: NgForm; //elementref is used as type as well instead NgForm

  onSubmit() {
    console.log(this.signUPForm)
    console.log(this.signUPForm.value)

    this.signUPForm.reset()//this is to clear the form after submitting the form reset is a default function in angular 
  }

  fillValue(){

    this.signUPForm.setValue({
      email:"aradhyaambole92@gmail.com",
      password:"         "
    })
  }
}
