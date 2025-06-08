import { Component } from '@angular/core';
import { joke, users } from '../models/user';
import { ApiServiceService } from '../service/api-service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-api-comp',
  standalone: true,
  imports: [NgFor],
  templateUrl: './api-comp.component.html',
  styleUrl: './api-comp.component.css',
})
export class ApiCompComponent {
  uzar: users[] = [];
joks:joke[] = []
  constructor(private userservice: ApiServiceService) {}

  ngOnInit() {
    this.userservice.getuser().subscribe({
      next: (data) => (this.uzar = data),
    });
  
    this.userservice.getjoke().subscribe({
      next: (data) => (this.joks = data),
    });
  }
}
