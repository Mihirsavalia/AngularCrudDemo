import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnguiryComponent } from './enguiry.component';

describe('EnguiryComponent', () => {
  let component: EnguiryComponent;
  let fixture: ComponentFixture<EnguiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnguiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnguiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
