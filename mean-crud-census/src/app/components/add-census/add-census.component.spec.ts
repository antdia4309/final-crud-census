import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCensusComponent } from './add-census.component';

describe('AddCensusComponent', () => {
  let component: AddCensusComponent;
  let fixture: ComponentFixture<AddCensusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCensusComponent]
    });
    fixture = TestBed.createComponent(AddCensusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
