import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityquestionComponent } from './securityquestion.component';

describe('SecurityquestionComponent', () => {
  let component: SecurityquestionComponent;
  let fixture: ComponentFixture<SecurityquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
