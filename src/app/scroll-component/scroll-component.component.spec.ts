import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollComponentComponent } from './scroll-component.component';

describe('ScrollComponentComponent', () => {
  let component: ScrollComponentComponent;
  let fixture: ComponentFixture<ScrollComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
