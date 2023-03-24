/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OviComponent } from './ovi.component';

describe('OviComponent', () => {
  let component: OviComponent;
  let fixture: ComponentFixture<OviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
