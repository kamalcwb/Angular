/**
 * Serviço responsavel por executar as operações da
 * calculadora
 * 
 * @author Adelson E. Silva de Paula <adelson.kaminski@icloud.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLIACAO: string = '*';

  constructor() { }

  /**
   * Metodo que calcula uma operação matemática entre dois números
   * adição, subtração, divisão, multiplicação
   * @param num1 number
   * @param num2 number
   * @param operacao string  Operação a ser executada
   * @param return number Resuldado da operação
   */

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; //Armazena o resultado da operação

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLIACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }

}
