import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services'

@Component({
  selector: 'app-caculadora',
  templateUrl: './caculadora.component.html',
  styleUrls: ['./caculadora.component.scss']
})
export class CaculadoraComponent implements OnInit {

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
  }

}
