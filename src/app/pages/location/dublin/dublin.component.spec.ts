import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DublinComponent } from './dublin.component';

describe('DublinComponent', () => {
  let component: DublinComponent;
  let fixture: ComponentFixture<DublinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DublinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DublinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
