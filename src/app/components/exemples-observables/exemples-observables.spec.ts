import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplesObservables } from './exemples-observables';

describe('ExemplesObservables', () => {
  let component: ExemplesObservables;
  let fixture: ComponentFixture<ExemplesObservables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemplesObservables],
    }).compileComponents();

    fixture = TestBed.createComponent(ExemplesObservables);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
