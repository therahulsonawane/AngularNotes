import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForDirectiveComponent } from './ng-for-directive.component';

describe('NgForDirectiveComponent', () => {
  let component: NgForDirectiveComponent;
  let fixture: ComponentFixture<NgForDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgForDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
