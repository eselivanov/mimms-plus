import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewCelComponent } from './create-new-cel.component';

describe('CreateNewCelComponent', () => {
  let component: CreateNewCelComponent;
  let fixture: ComponentFixture<CreateNewCelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewCelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewCelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
