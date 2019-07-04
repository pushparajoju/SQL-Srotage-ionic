import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlsavedataPage } from './sqlsavedata.page';

describe('SqlsavedataPage', () => {
  let component: SqlsavedataPage;
  let fixture: ComponentFixture<SqlsavedataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlsavedataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlsavedataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
