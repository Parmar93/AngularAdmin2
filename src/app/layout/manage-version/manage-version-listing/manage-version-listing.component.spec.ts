import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVersionListingComponent } from './manage-version-listing.component';

describe('ManageVersionListingComponent', () => {
  let component: ManageVersionListingComponent;
  let fixture: ComponentFixture<ManageVersionListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageVersionListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVersionListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
