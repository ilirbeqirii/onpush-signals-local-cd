import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandchildXComponent } from './grandchild-x.component';

describe('GrandchildXComponent', () => {
  let component: GrandchildXComponent;
  let fixture: ComponentFixture<GrandchildXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrandchildXComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrandchildXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
