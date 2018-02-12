import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewImmComponent } from './create-new-imm.component';

describe('CreateNewImmComponent', () => {
  let component: CreateNewImmComponent;
  let fixture: ComponentFixture<CreateNewImmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewImmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewImmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
