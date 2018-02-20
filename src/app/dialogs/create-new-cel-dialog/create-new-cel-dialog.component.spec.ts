import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewCelDialogComponent } from './create-new-cel-dialog.component';

describe('CreateNewCelDialogComponent', () => {
  let component: CreateNewCelDialogComponent;
  let fixture: ComponentFixture<CreateNewCelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewCelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewCelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
