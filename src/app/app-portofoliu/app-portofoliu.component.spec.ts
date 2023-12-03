import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPortofoliuComponent } from './app-portofoliu.component';

describe('AppPortofoliuComponent', () => {
  let component: AppPortofoliuComponent;
  let fixture: ComponentFixture<AppPortofoliuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPortofoliuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppPortofoliuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
