import { Component } from '@angular/core';
import { OtherComponent } from './other';

@Component({
  selector: 'app-root',
  //angular searches for 'app-root' in the root component
  template: `
    <h1>Inline Template</h1>
    <fa-other></fa-other>
    <fa-another></fa-another>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I changed it!';
}
