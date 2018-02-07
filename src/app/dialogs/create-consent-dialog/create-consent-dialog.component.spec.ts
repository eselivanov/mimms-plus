import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConsentDialogComponent } from './create-consent-dialog.component';

describe('CreateConsentDialogComponent', () => {
  let component: CreateConsentDialogComponent;
  let fixture: ComponentFixture<CreateConsentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateConsentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConsentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
