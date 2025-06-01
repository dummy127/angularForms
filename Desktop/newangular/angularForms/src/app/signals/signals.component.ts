import { NgClass } from '@angular/common';
import {
  Component,
  computed,
  effect,
  ElementRef,
  signal,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [NgClass],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
})
export class SignalsComponent {
  @ViewChild('length') Linput!: ElementRef;
  @ViewChild('breadth') Binput!: ElementRef;

  counter = signal(1);

  color = true;
  a = signal(10);
  b = signal(66);
  sum = computed(() => this.a() + this.b());

  length = signal(78);
  breadth = signal(74);

  area = computed(() => this.length() * this.breadth());

  constructor() {
    effect(() => {
      console.log('counter value changed', this.counter());
      this.color = !this.color;
    });

    effect(() => {
      console.log('area is', this.area());
    });
  }
  ngOnInit() {
    console.log('sum is', this.sum());
    this.a.set(99);
    console.log('sum new', this.sum());
    this.b.set(744);
    console.log('sum new again', this.sum());
  
    //console.log('this is the area', this.area());
  }

  increase() {
    // this.counter.set(this.counter()+1)
    this.counter.update((value) => value + 1); //alternate way for above
  }

  descrease() {
    this.counter.update((value) => value - 1);
  }

  setL() {
    console.log(this.Linput.nativeElement.value);
    this.length.set(Number(this.Linput.nativeElement.value));
  }

  setB() {
    console.log(this.Binput.nativeElement.value);
    this.breadth.set(Number(this.Binput.nativeElement.value));
  }

}
