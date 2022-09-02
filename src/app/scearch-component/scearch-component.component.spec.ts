import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScearchComponentComponent } from './scearch-component.component';

describe('ScearchComponentComponent', () => {
  let component: ScearchComponentComponent;
  let fixture: ComponentFixture<ScearchComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScearchComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
