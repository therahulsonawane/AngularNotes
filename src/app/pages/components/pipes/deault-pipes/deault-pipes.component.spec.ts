import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeaultPipesComponent } from './deault-pipes.component';

describe('DeaultPipesComponent', () => {
  let component: DeaultPipesComponent;
  let fixture: ComponentFixture<DeaultPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeaultPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeaultPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
