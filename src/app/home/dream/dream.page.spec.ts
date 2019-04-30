import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamPage } from './dream.page';

describe('DreamPage', () => {
  let component: DreamPage;
  let fixture: ComponentFixture<DreamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
