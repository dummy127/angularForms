import { Component } from '@angular/core';
import { FirstserviceService, product } from '../service/firstservice.service';
import { CommonEngine } from '@angular/ssr';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-firstapp',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './firstapp.component.html',
  styleUrl: './firstapp.component.css'
})
export class FirstappComponent {


  prd:product[]=[]

  constructor(private productservice:FirstserviceService){

  }

//component of intialization
  ngOnInit(){
this.productservice.getProdcut().subscribe({
  next:(data)=>{this.prd = data}
})

}
}
