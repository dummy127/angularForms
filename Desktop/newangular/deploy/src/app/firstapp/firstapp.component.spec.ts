import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstappComponent } from './firstapp.component';

describe('FirstappComponent', () => {
  let component: FirstappComponent;
  let fixture: ComponentFixture<FirstappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
