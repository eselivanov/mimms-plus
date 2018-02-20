import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewClinicalNoteDialogComponent } from './create-new-clinical-note-dialog.component';

describe('CreateNewClinicalNoteDialogComponent', () => {
  let component: CreateNewClinicalNoteDialogComponent;
  let fixture: ComponentFixture<CreateNewClinicalNoteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewClinicalNoteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewClinicalNoteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
