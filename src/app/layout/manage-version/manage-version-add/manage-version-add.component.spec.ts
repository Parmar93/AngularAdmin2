import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVersionAddComponent } from './manage-version-add.component';

describe('ManageVersionAddComponent', () => {
  let component: ManageVersionAddComponent;
  let fixture: ComponentFixture<ManageVersionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageVersionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVersionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
