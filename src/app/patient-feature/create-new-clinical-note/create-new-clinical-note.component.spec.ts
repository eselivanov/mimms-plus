import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewClinicalNoteComponent } from './create-new-clinical-note.component';

describe('CreateNewClinicalNoteComponent', () => {
  let component: CreateNewClinicalNoteComponent;
  let fixture: ComponentFixture<CreateNewClinicalNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewClinicalNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewClinicalNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
