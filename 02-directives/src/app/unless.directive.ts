import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {
  //input is bound to the unless directive. whenever the value is set, 
  @Input() set unless(condition: boolean) {
    if (!condition) {
      // it will take the vcRef positiona nd render the content of this template
      this.vcRef.createEmbeddedView(this.templateRef);
    }
    else {
      this.vcRef.clear()
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
