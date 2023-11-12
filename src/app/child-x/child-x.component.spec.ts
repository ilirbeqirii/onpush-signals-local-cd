import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildXComponent } from './child-x.component';

describe('ChildXComponent', () => {
  let component: ChildXComponent;
  let fixture: ComponentFixture<ChildXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildXComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
