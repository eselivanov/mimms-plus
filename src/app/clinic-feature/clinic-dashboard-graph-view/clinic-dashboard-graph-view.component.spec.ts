import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicDashboardGraphViewComponent } from './clinic-dashboard-graph-view.component';

describe('ClinicDashboardGraphViewComponent', () => {
  let component: ClinicDashboardGraphViewComponent;
  let fixture: ComponentFixture<ClinicDashboardGraphViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicDashboardGraphViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicDashboardGraphViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
