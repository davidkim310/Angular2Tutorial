import { Component, Input } from '@angular/core';

@Component({
  selector: 'fa-property-binding',
  template: `
    {{result}}
  `,
  styles: []
})
export class PropetyBindingComponent {
  @Input() result: number = 0;

}
