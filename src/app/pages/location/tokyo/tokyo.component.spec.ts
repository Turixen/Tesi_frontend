import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokyoComponent } from './tokyo.component';

describe('TokyoComponent', () => {
  let component: TokyoComponent;
  let fixture: ComponentFixture<TokyoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokyoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
