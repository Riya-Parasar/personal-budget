import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarComponent } from './guitar.component';

describe('GuitarComponent', () => {
  let component: GuitarComponent;
  let fixture: ComponentFixture<GuitarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuitarComponent]
    });
    fixture = TestBed.createComponent(GuitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
