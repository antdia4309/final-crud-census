import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCensusComponent } from './edit-census.component';

describe('EditCensusComponent', () => {
  let component: EditCensusComponent;
  let fixture: ComponentFixture<EditCensusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCensusComponent]
    });
    fixture = TestBed.createComponent(EditCensusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
