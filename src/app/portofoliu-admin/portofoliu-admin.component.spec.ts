import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofoliuAdminComponent } from './portofoliu-admin.component';

describe('PortofoliuAdminComponent', () => {
  let component: PortofoliuAdminComponent;
  let fixture: ComponentFixture<PortofoliuAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortofoliuAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortofoliuAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
