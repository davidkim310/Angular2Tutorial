import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //angular searches for 'app-root' in the root component
  template: `
    <h1>Root Component</h1>
    <fa-lifecycle *ngIf="!delete" [bindable]="boundValue">
      <p #boundContent>{{test}}</p>
    </fa-lifecycle>
    <button (click)='delete = true'>Click to Delete Content</button>
    <button (click)="test = 'changed value'">Click to Change Binding</button>
    <button (click)="boundValue = '2000'">Click to Change Binding</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I changed it!';
  delete = false;
  test = 'Starting Value'
  boundValue = 1000;
}
