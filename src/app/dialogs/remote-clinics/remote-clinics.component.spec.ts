import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteClinicsComponent } from './remote-clinics.component';

describe('RemoteClinicsComponent', () => {
  let component: RemoteClinicsComponent;
  let fixture: ComponentFixture<RemoteClinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteClinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteClinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
