import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewSpecialConsiderationComponent } from './create-new-special-consideration.component';

describe('CreateNewSpecialConsiderationComponent', () => {
  let component: CreateNewSpecialConsiderationComponent;
  let fixture: ComponentFixture<CreateNewSpecialConsiderationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewSpecialConsiderationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewSpecialConsiderationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
