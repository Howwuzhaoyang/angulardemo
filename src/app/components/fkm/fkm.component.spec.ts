import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FKMComponent } from './fkm.component';

describe('FKMComponent', () => {
  let component: FKMComponent;
  let fixture: ComponentFixture<FKMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FKMComponent]
    });
    fixture = TestBed.createComponent(FKMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
