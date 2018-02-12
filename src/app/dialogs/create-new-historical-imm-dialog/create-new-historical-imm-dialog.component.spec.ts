import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewHistoricalImmDialogComponent } from './create-new-historical-imm-dialog.component';

describe('CreateNewHistoricalImmDialogComponent', () => {
  let component: CreateNewHistoricalImmDialogComponent;
  let fixture: ComponentFixture<CreateNewHistoricalImmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewHistoricalImmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewHistoricalImmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
