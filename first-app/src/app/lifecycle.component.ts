import { Component, Input, ViewChild, ContentChild, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>{{bindable}}</p>
    // <p>{{boundParagraph.textContent}}</p>

  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @ContentChild('boundContent')
  boundContent: HTMLElement;
  @Input() bindable = 1000;
  //use this to graph html element
  // @ViewChild('boundParagraph') 
  // boundParagraph: HTMLElement

  constructor() { 
  }
  // looks for when any databound property changes
  ngOnChanges() {
    this.log('ngOnChanges')
  }
  // on intialize
  ngOnInit() {
    this.log('ngOnInit')
    // console.log(this.boundParagraph);
    
  }
  // on every angular change cycle, called upon each change detection cycle
  ngDoCheck() {
    this.log('ngDoCheck')
  }
  // executed whenever content is inserted
  ngAfterContentInit() {
    this.log('ngAfterContentInit')
    console.log(this.boundContent)
  }
  // whenever we check the inserted content
  ngAfterContentChecked() {
    this.log('ngAfterContentChecked')
  }
  // passed when the template html has been initialized
  ngAfterViewInit() {
    this.log('ngAfterViewInit')
  }
  //????
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked')
  }
  // when a directive or component is destroyed
  ngOnDestroy() {
    this.log('ngOnDestroy')
  }
  
  private log(hook: string) {
    console.log(hook)
  }
}
