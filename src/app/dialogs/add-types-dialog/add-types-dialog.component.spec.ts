import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypesDialogComponent } from './add-types-dialog.component';

describe('AddTypesDialogComponent', () => {
  let component: AddTypesDialogComponent;
  let fixture: ComponentFixture<AddTypesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTypesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
