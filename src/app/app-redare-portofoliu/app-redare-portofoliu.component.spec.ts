import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRedarePortofoliuComponent } from './app-redare-portofoliu.component';

describe('AppRedarePortofoliuComponent', () => {
  let component: AppRedarePortofoliuComponent;
  let fixture: ComponentFixture<AppRedarePortofoliuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRedarePortofoliuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppRedarePortofoliuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
