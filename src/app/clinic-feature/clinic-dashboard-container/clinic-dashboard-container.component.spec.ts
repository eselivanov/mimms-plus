import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicDashboardContainerComponent } from './clinic-dashboard-container.component';

describe('ClinicDashboardContainerComponent', () => {
  let component: ClinicDashboardContainerComponent;
  let fixture: ComponentFixture<ClinicDashboardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicDashboardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicDashboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
