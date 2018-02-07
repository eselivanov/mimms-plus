import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewConsentComponent } from './create-new-consent.component';

describe('CreateNewConsentComponent', () => {
  let component: CreateNewConsentComponent;
  let fixture: ComponentFixture<CreateNewConsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewConsentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
