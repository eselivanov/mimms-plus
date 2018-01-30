import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAdministerImmComponent } from './patient-administer-imm.component';

describe('PatientAdministerImmComponent', () => {
  let component: PatientAdministerImmComponent;
  let fixture: ComponentFixture<PatientAdministerImmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientAdministerImmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAdministerImmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
