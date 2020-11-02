import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.backgroundColor='blue';
  }
}