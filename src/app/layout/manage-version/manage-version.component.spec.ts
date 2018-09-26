import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVersionComponent } from './manage-version.component';

describe('ManageVersionComponent', () => {
  let component: ManageVersionComponent;
  let fixture: ComponentFixture<ManageVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
