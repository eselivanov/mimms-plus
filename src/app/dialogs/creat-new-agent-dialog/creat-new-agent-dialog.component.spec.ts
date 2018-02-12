import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatNewAgentDialogComponent } from './creat-new-agent-dialog.component';

describe('CreatNewAgentDialogComponent', () => {
  let component: CreatNewAgentDialogComponent;
  let fixture: ComponentFixture<CreatNewAgentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatNewAgentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatNewAgentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
