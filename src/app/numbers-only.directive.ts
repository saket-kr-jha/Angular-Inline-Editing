import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {

  constructor(private el : ElementRef,private renderer: Renderer2) { }

  @HostListener('keypress', ['$event'])
  onInput(event: any){
    const allowedChars = /[0-9]/;
    if (!allowedChars.test(event.key)) {
      event.preventDefault(); // Prevent non-numeric characters
    }
  }

}
