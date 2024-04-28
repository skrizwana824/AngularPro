import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomComponent } from './autom.component';

describe('AutomComponent', () => {
  let component: AutomComponent;
  let fixture: ComponentFixture<AutomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
