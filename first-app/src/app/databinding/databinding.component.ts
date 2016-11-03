import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  //create content for expressions using {{}}
  stringInterpolation = 'This is string interpolation';
  numberInterpolation = 2;
  onTest(){
    return true
  }
}
