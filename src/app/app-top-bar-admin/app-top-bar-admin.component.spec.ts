import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTopBarAdminComponent } from './app-top-bar-admin.component';

describe('AppTopBarAdminComponent', () => {
  let component: AppTopBarAdminComponent;
  let fixture: ComponentFixture<AppTopBarAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTopBarAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppTopBarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
