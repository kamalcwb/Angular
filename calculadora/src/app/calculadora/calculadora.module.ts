import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaculadoraComponent } from './component';
import { CalculadoraService } from './services'



@NgModule({
  declarations: [CaculadoraComponent],
  imports: [
    CommonModule
  ],
  exports:
    [CaculadoraComponent],
  providers: [CalculadoraService]
})
export class CalculadoraModule { }
