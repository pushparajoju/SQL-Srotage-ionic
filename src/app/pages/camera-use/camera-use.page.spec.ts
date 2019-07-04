import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraUsePage } from './camera-use.page';

describe('CameraUsePage', () => {
  let component: CameraUsePage;
  let fixture: ComponentFixture<CameraUsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraUsePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraUsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
