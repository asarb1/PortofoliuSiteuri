import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedarePortofoliuAdminComponent } from './redare-portofoliu-admin.component';

describe('RedarePortofoliuAdminComponent', () => {
  let component: RedarePortofoliuAdminComponent;
  let fixture: ComponentFixture<RedarePortofoliuAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedarePortofoliuAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedarePortofoliuAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
