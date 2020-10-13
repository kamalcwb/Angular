import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaculadoraComponent } from './caculadora.component';

describe('CaculadoraComponent', () => {
  let component: CaculadoraComponent;
  let fixture: ComponentFixture<CaculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaculadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
