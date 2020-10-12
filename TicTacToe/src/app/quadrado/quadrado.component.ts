import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quadrado',
  template: `
  <button>{{ value }}</button>
  `,
  styleUrls: ['./quadrado.component.scss']
})
export class QuadradoComponent {

  @Input() value: 'X' | 'O';

}
