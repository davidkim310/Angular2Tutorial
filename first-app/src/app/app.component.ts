import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //angular searches for 'app-root' in the root component
  template: `
    <h1>Inline Template</h1>
    <fa-databinding></fa-databinding>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I changed it!';
}
