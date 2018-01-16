import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMainContainerComponent } from './patient-main-container.component';

describe('PatientMainContainerComponent', () => {
  let component: PatientMainContainerComponent;
  let fixture: ComponentFixture<PatientMainContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMainContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
