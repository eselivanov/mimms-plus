import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientConsentsComponent } from './patient-consents.component';

describe('PatientConsentsComponent', () => {
  let component: PatientConsentsComponent;
  let fixture: ComponentFixture<PatientConsentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientConsentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientConsentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
