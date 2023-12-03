import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPictureComponent } from './app-picture.component';

describe('AppPictureComponent', () => {
  let component: AppPictureComponent;
  let fixture: ComponentFixture<AppPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPictureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
