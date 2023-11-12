import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandchildYComponent } from './grandchild-y.component';

describe('GrandchildYComponent', () => {
  let component: GrandchildYComponent;
  let fixture: ComponentFixture<GrandchildYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrandchildYComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrandchildYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
