import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewSpecialConsiderationDialogComponent } from './create-new-special-consideration-dialog.component';

describe('CreateNewSpecialConsiderationDialogComponent', () => {
  let component: CreateNewSpecialConsiderationDialogComponent;
  let fixture: ComponentFixture<CreateNewSpecialConsiderationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewSpecialConsiderationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewSpecialConsiderationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
