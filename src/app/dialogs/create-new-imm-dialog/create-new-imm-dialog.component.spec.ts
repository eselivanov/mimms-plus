import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewImmDialogComponent } from './create-new-imm-dialog.component';

describe('CreatNewImmDialogComponent', () => {
  let component: CreateNewImmDialogComponent;
  let fixture: ComponentFixture<CreateNewImmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewImmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewImmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
