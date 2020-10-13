import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { CaculadoraComponent } from './caculadora.component';

import { CalculadoraService } from '../services'

describe('CaculadoraComponent', () => {
  let component: CaculadoraComponent;
  let fixture: ComponentFixture<CaculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaculadoraComponent],
      providers: [CalculadoraService]
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

  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    }));

  it('deve garantir que 1 - 4 = -3',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(-3);
    }));

  it('deve garantir que 1 / 4 = 0,25',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let dividir = service.calcular(1, 4, CalculadoraService.DIVISAO);
      expect(dividir).toEqual(0.25);
    }));

  it('deve garantir que 1 * 4 = 4',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let multiplicacao = service.calcular(1, 4, CalculadoraService.MULTIPLIACAO);
      expect(multiplicacao).toEqual(4);
    }));
});
