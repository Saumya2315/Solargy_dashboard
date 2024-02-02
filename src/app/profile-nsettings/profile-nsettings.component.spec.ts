import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNsettingsComponent } from './profile-nsettings.component';

describe('ProfileNsettingsComponent', () => {
  let component: ProfileNsettingsComponent;
  let fixture: ComponentFixture<ProfileNsettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileNsettingsComponent]
    });
    fixture = TestBed.createComponent(ProfileNsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
