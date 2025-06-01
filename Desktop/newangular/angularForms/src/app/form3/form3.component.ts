import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { commonpassV } from './validator/commonpassV';

@Component({
  selector: 'app-form3',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './form3.component.html',
  styleUrl: './form3.component.css',
})
export class Form3Component {
  reactiveForm!: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      email: new FormControl('aradhyaambole@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(
        'thisispassword',
        [Validators.required, Validators.minLength(6),commonpassV([
          '1234567890',
          '123456789',
          '12345678',
          'password',
          'thisispassword',
          'password@123',
        ])],
        
      ),
      age: new FormControl(21, [
        Validators.required,
        Validators.min(18),
        Validators.max(40),
      ]),
    });
  }

  onSubmit() {
    // console.log("values",this.reactiveForm.value)
    // console.log("touched",this.reactiveForm.touched)
    // console.log("dirty",this.reactiveForm.dirty)
    // console.log("valid",this.reactiveForm.valid)
    console.log('Email', this.reactiveForm.get('email'));
  }
}
