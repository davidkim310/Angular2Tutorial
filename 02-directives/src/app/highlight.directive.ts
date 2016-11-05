// import { Directive, ElementRef, Renderer } from '@angular/core';

// @Directive({
//   selector: '[highlight]'
// })
// export class HighlightDirective {
//when we create this directive, Angular2 will have to create this reference. 
//we need to create a private property
// private elementRef: ElementRef;
//   constructor(elementRef: ElementRef) {
//     //make the elementRef equal the injected element 
//     this.elementRef = elementRef;
//    }
// or... a shorter way through typescript. we can add the private to the constructor arguments list
    // constructor (private elementRef: ElementRef, private renderer: Renderer) {
    //   // by accesssing the elementRef then accessing the nativeElement behind the reference
    //   //However this is not best practices
    //   // this.elementRef.nativeElement.style.backgroundColor = 'green';
    //   //best practices below... cleaner 
    //   this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green')
    // }
// }
import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseover() {
      this.backgroundColor = this.highlightColor;
  };
  @HostListener('mouseleave') mouseleave() {
      this.backgroundColor = this.defaultColor;
  };
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  @Input() defaultColor= 'white';
  @Input('highlight') highlightColor= 'green';
    // private backgroundColor= 'white';
  // private backgroundColor= this.defaultColor;
  private backgroundColor: string;
  constructor() {

  }
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}