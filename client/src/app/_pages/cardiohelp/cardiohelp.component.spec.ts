/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardiohelpComponent } from './cardiohelp.component';

describe('CardiohelpComponent', () => {
  let component: CardiohelpComponent;
  let fixture: ComponentFixture<CardiohelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardiohelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardiohelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
